import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './MyTasksStyles';

const MyTasks: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography color='secondary'>"המשימות שלי" בקרוב</Typography>
    </Paper>
  );
};

export default MyTasks;
