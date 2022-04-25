import { FC } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useMutation } from '@apollo/client/react/hooks/useMutation';

import { useStyles } from './TaskRowStyles';
import {
  CHECK_TASK,
  DELETE_TASK,
  GET_FINISH_TASKS_BY_TZOER,
  UNCHECKED_TASK
} from 'queries/tasksQueries';
import auth from 'common/auth';

interface TaskRowProps {
  id: number;
  description: string;
  isFinished: boolean;
  deadline: string;
}

const TaskRow: FC<TaskRowProps> = props => {
  const { id, description, isFinished, deadline } = props;
  const classes = useStyles();

  const loggedTzoerId: number = auth.getLoggedTzoer().id;

  const [checkTask] = useMutation<{ id: number }, { tzoer_id: number; task_id: number }>(
    CHECK_TASK,
    {
      variables: {
        tzoer_id: loggedTzoerId,
        task_id: id
      },
      refetchQueries: [GET_FINISH_TASKS_BY_TZOER]
    }
  );

  const [uncheckTask] = useMutation<
    {
      delete_tzoer_finish_task: {
        affected_rows: number;
      };
    },
    { tzoer_id: number; task_id: number }
  >(UNCHECKED_TASK, {
    variables: {
      tzoer_id: loggedTzoerId,
      task_id: id
    },
    refetchQueries: [GET_FINISH_TASKS_BY_TZOER]
  });

  const [deleteTask] = useMutation<
    {
      delete_tzoer_task: {
        affected_rows: number;
      };
    },
    { task_id: number }
  >(DELETE_TASK, {
    variables: {
      task_id: id
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isFinished ? uncheckTask() : checkTask();
  };

  return (
    <ListItem disabled={isFinished} className={classes.container}>
      <ListItemIcon>
        <Checkbox
          onChange={handleChange}
          checked={isFinished}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
      </ListItemIcon>
      <ListItemText
        classes={{ primary: classes.listItemText }}
        className={classes.description}
        primary={description}
      />
      <Chip className={classes.deadlineChip} size='small' color='primary' label={deadline} />
      <IconButton
        onClick={() => deleteTask()}
        size='small'
        className={classes.deleteButton}
        aria-label='delete'
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskRow;
