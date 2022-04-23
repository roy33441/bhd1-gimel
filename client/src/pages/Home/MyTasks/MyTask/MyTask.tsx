import { FC } from 'react';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from './MyTaskStyles';
import { Checkbox, FormControlLabel, IconButton, withStyles } from '@material-ui/core';
import theme from 'common/theme';
import { CheckCircle, Delete, RadioButtonUnchecked } from '@material-ui/icons';
import moment from 'moment-timezone';


interface TaskProps {
  id: number
  title: string;
  date: string;
  deleteTask: (taskId: any) => void;
}

const Task: FC<TaskProps> = (props): JSX.Element => {
  const { id, title, date, deleteTask } = props;
  const classes = useStyles();

  const CustomCheckbox = withStyles({
    root: {
      borderWidth: 10,
      color: theme.palette.secondary.main,
      "&$checked": {
        color: theme.palette.secondary.main
      }
    },
    checked: {}
  })((props) => 
      <Checkbox
        className={classes.checkbox}
        color="default"
        icon={<RadioButtonUnchecked />}
        checkedIcon={<CheckCircle />}
        {...props}
      />
    );

    const getDate = (taskDate: string): string => {
      const isToday: boolean = moment().format("YYYY-MM-DD") === moment(taskDate).format("YYYY-MM-DD");
      const taskUtcDate = moment(taskDate).tz('UTC');
      if (isToday && taskUtcDate.format("HH:mm") !== "00:00") {        
        return taskUtcDate.format("HH:mm");
      } else {
        return taskUtcDate.format("DD.MM.YYYY");
      }
    }

  return (
    <ListItem className={classes.container}>
      <div className={classes.task}>
        <FormControlLabel
          value="end"
          control={<CustomCheckbox />}
          label={title}
          labelPlacement="end"
        />
        <Chip
          className={classes.dateChip}
          size='small'
          color='secondary'
          label={getDate(date)}
        />
      </div>
      <IconButton aria-label="delete" color="default" onClick={() => deleteTask({ variables: { deleted_task_id: id } })}>
        <Delete />
      </IconButton>
    </ListItem>
  );
};

export default Task;
