import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import { useQuery } from '@apollo/client/react/hooks/useQuery';

import { useStyles } from './TeamTasksStyles';
import TaskRow from 'pages/Home/TeamTasks/TaskRow/TaskRow';
import auth from 'common/auth';
import AddTask from 'pages/Home/TeamTasks/AddTask/AddTask';
import { FinishTaskGQL, TaskGQL, Task } from 'types/task';
import { GET_FINISH_TASKS_BY_TZOER, GET_TASKS_BY_TEAM } from 'queries/tasksQueries';
import { Tzoer } from 'types/tzoer';
import { useSubscription } from '@apollo/client';
import { format } from 'date-fns/esm';

const MyTasks: FC = (): JSX.Element => {
  const classes = useStyles();
  const loggedTzoer: Tzoer = auth.getLoggedTzoer();

  const { data: tasksData, loading: loadingTasks } = useSubscription<TaskGQL, { team_id: number }>(
    GET_TASKS_BY_TEAM,
    {
      variables: {
        team_id: loggedTzoer.team.id
      }
    }
  );

  const { data: finishTasksData, loading: loadingFinishTasks } = useQuery<
    FinishTaskGQL,
    { tzoer_id: number }
  >(GET_FINISH_TASKS_BY_TZOER, {
    variables: {
      tzoer_id: loggedTzoer.id
    }
  });

  if (loadingTasks || loadingFinishTasks) {
    return (
      <Paper className={classes.loadingOrErrorContainer}>
        <CircularProgress size={50} color='secondary' />
      </Paper>
    );
  }

  if (!tasksData || !finishTasksData) {
    return (
      <div className={classes.loadingOrErrorContainer}>
        <Typography>שגיאה בטעינת המשימות</Typography>
      </div>
    );
  }

  const finishTasksIds: number[] = finishTasksData.finish_tasks.map(task => task.task_id);
  const tasks: Task[] = tasksData.tasks.map(task => ({
    ...task,
    deadline: format(new Date(task.deadline), 'dd.MM.yyyy'),
    isFinished: finishTasksIds.findIndex(finishTaskId => finishTaskId === task.id) !== -1
  }));

  const sortedTasks: Task[] = [...tasks].sort(({ isFinished }) => (isFinished ? 1 : -1));

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title}>המשימות של צוות {loggedTzoer.team.name}</Typography>
      <List className={classes.listContainer}>
        {sortedTasks.map(task => (
          <TaskRow
            key={task.id}
            id={task.id}
            description={task.description}
            isFinished={task.isFinished}
            deadline={task.deadline}
          />
        ))}
      </List>
      <AddTask />
    </Paper>
  );
};

export default MyTasks;
