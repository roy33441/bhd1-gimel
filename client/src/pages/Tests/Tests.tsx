import { FC } from 'react';
import { useQuery } from '@apollo/client';
import List from '@material-ui/core/List';

import TestCard from 'pages/Tests/TestCard/TestCard';
import { Test, TestGQL } from 'types/test';
import { GET_SCORED_TESTS_BY_PERSONAL_ID, GET_TESTS } from 'queries/testsQueries';
import { ScoreGQL } from 'types/score';

const Tests: FC = (): JSX.Element => {
  const { data: testsData, loading: loadingAllTests } = useQuery<TestGQL>(GET_TESTS);
  const { data: scoredTestsData, loading: loadingscoredTests } = useQuery<ScoreGQL>(
    GET_SCORED_TESTS_BY_PERSONAL_ID
  );

  if (loadingAllTests || loadingscoredTests) {
    return <div>LOADING</div>;
  }
  if (!scoredTestsData || !testsData) {
    alert('שגיאה בטעינת הב"בים');
    return <></>;
  }

  const scoredTestsIds: number[] = scoredTestsData.scoredTests.map(test => test.id);
  const tests: Test[] = testsData.allTests.map(test => ({
    ...test,
    isFinished: scoredTestsIds.includes(test.id)
  }));

  return (
    <List style={{ maxHeight: 650, overflow: 'auto' }}>
      {tests.map(test => (
        <TestCard
          title={test.title}
          numOfQuestions={test.questions_number}
          link={test.form_url}
          isFinished={test.isFinished}
        />
      ))}
    </List>
  );
};

export default Tests;
