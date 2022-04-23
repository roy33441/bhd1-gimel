import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import { useMutation } from '@apollo/client/react/hooks/useMutation';

import { useStyles } from './TestCardStyles';
import StatusDropdown from 'pages/Tests/TestCard/StatusDropdown/StatusDropdown';
import { Status } from 'types/test';
import { GET_SCORED_TESTS_BY_PERSONAL_ID, NEW_TEST, SCORE_TEST } from 'queries/testsQueries';
import auth from 'common/auth';

interface TestCardProps {
  id: number;
  title: string;
  numOfQuestions: number;
  link: string;
  isScored: boolean;
}

type AffectedRowsGQL = {
  insert_tzoer_attendance: {
    affected_rows: number;
  };
};

const SCORED_STATUS_ID = 1;
const NEW_STATUS_ID = 2;
const STATUS_OPTIONS: Status[] = [
  {
    id: SCORED_STATUS_ID,
    name: 'סיימתי',
    iconURL: 'icons/scoredTest.svg'
  },
  {
    id: NEW_STATUS_ID,
    name: 'חדש',
    iconURL: 'icons/newTest.svg'
  }
];

const TestCard: FC<TestCardProps> = (props): JSX.Element => {
  const { title, numOfQuestions, link, id, isScored } = props;
  const loggedTzoerId: number = auth.getLoggedTzoer().id;
  const classes = useStyles();

  const selectedStatus: Status = isScored
    ? STATUS_OPTIONS[SCORED_STATUS_ID - 1]
    : STATUS_OPTIONS[NEW_STATUS_ID - 1];

  const openTestTab = (): Window | null => window.open(link, '_blank');

  const [scoreTest] = useMutation<AffectedRowsGQL, { tzoer_id: number; test_id: number }>(
    SCORE_TEST,
    {
      variables: {
        tzoer_id: loggedTzoerId,
        test_id: id
      },
      refetchQueries: [GET_SCORED_TESTS_BY_PERSONAL_ID]
    }
  );

  const [newTest] = useMutation<AffectedRowsGQL, { tzoer_id: number; test_id: number }>(NEW_TEST, {
    variables: {
      tzoer_id: loggedTzoerId,
      test_id: id
    },
    refetchQueries: [GET_SCORED_TESTS_BY_PERSONAL_ID]
  });

  const changeStatus = (isFinished: boolean) => (isFinished ? scoreTest() : newTest());
  return (
    <ListItem className={classes.container}>
      <Paper className={classes.card}>
        <div className={classes.header}>
          <Typography className={classes.questions}>
            <Box fontWeight='fontWeightLight'>{numOfQuestions} שאלות</Box>
          </Typography>
          <div className={classes.statusContainer}>
            <Typography className={classes.status}>{selectedStatus.name}</Typography>
            <StatusDropdown options={STATUS_OPTIONS} onChangeStatus={changeStatus} />
            <Icon>
              <img className={classes.imageIcon} src={selectedStatus.iconURL} alt='status' />
            </Icon>
          </div>
        </div>
        <Typography className={classes.title}>{title}</Typography>
        <div className={classes.bottomHeader}>
          <Chip
            className={classes.startButton}
            icon={<ArrowLeftIcon />}
            variant='outlined'
            color='secondary'
            label='יאללה שנתחיל'
            onClick={openTestTab}
          />
        </div>
      </Paper>
    </ListItem>
  );
};

export default TestCard;
