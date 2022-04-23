import { FC } from 'react';
import { useQuery } from '@apollo/client';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import TestCard from 'pages/Tests/TestCard/TestCard';
import { Test, TestGQL } from 'types/test';
import { GET_SCORED_TESTS_BY_PERSONAL_ID, GET_TESTS } from 'queries/testsQueries';
import { ScoreGQL } from 'types/score';
import { useStyles } from './TestsStyles';
import { Tzoer } from 'types/tzoer';
import auth from 'common/auth';

const Tests: FC = (): JSX.Element => {
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  const classes = useStyles();

  const { data: testsData, loading: loadingAllTests } = useQuery<TestGQL>(GET_TESTS);
  const { data: scoredTestsData, loading: loadingscoredTests } = useQuery<
    ScoreGQL,
    { tzoer_id: number }
  >(GET_SCORED_TESTS_BY_PERSONAL_ID, {
    variables: {
      tzoer_id: loggedTzoer.id
    }
  });

  if (loadingAllTests || loadingscoredTests) {
    return (
      <div className={classes.loaderOrErrorContainer}>
        <CircularProgress size={80} color='primary' />
      </div>
    );
  }
  if (!scoredTestsData || !testsData) {
    return (
      <div className={classes.loaderOrErrorContainer}>
        <Typography>שגיאה בטעינת הב"בים</Typography>
      </div>
    );
  }

  const scoredTestsIds: number[] = scoredTestsData.scoredTests.map(test => test.test_id);
  const tests: Test[] = testsData.allTests.map(test => ({
    ...test,
    isFinished: scoredTestsIds.findIndex(scoredTestId => scoredTestId === test.id) !== -1
  }));

  const sortedTests: Test[] = [...tests].sort(({ isFinished }) => (isFinished ? 1 : -1));

  return (
    <List className={classes.testsList}>
      {sortedTests.map(test => (
        <TestCard
          id={test.id}
          key={test.id}
          title={test.title}
          numOfQuestions={test.questions_number}
          link={test.form_url}
          isScored={test.isFinished}
        />
      ))}
    </List>
  );
};

export default Tests;
