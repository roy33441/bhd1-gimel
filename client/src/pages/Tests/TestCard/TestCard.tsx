import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import ListItem from '@material-ui/core/ListItem';

import { useStyles } from './TestCardStyles';

interface TestCardProps {
  title: string;
  numOfQuestions: number;
  link: string;
  isFinished: boolean;
}

const TestCard: FC<TestCardProps> = (props): JSX.Element => {
  const { title, numOfQuestions, link, isFinished } = props;
  const classes = useStyles();

  const openTestTab = (): Window | null => window.open(link, '_blank');

  const finishChip: JSX.Element = (
    <Chip
      className={classes.finishChip}
      icon={<ArrowLeftIcon />}
      size='small'
      color='secondary'
      label='סיימתי'
    />
  );

  const newChip: JSX.Element = (
    <Chip
      className={classes.newChip}
      icon={<RemoveCircleOutlineRoundedIcon />}
      size='small'
      color='secondary'
      label='חדש'
    />
  );

  return (
    <ListItem className={classes.container}>
      <Paper className={classes.card}>
        <div className={classes.header}>
          <Typography className={classes.questions}>
            <Box fontWeight='fontWeightLight'>{numOfQuestions} שאלות</Box>
          </Typography>
          {isFinished ? finishChip : newChip}
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
