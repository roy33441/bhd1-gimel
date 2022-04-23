import { ChangeEvent, FC, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './MyTasksStyles';
import { Chip, CircularProgress, Drawer, IconButton, Input, List, Switch, TextField } from '@material-ui/core';
import { AccessTime, AddCircleOutline, CalendarToday } from '@material-ui/icons';
import moment from 'moment';
import MyTask from './MyTask/MyTask';
import { AddTask, Task, TaskGQL } from 'types/task';
import { Tzoer } from 'types/tzoer';
import auth from 'common/auth';
import { useMutation, useSubscription } from '@apollo/client';
import { GET_TASKS_BY_TEAM_ID, DELETE_TASK_BY_ID, ADD_TASK } from 'queries/taskQueries';

type AffectedRowsGQL = {
  insert_tzoer_task: {
    affected_rows: number;
  };
};

const MyTasks: FC = (): JSX.Element => {
  const classes = useStyles();

  const DATE = "תאריך";
  const HOUR = "שעה";

  const loggedTzoer: Tzoer = auth.getLoggedTzoer();
  
  const [open, setOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const [isDate, setIsDate] = useState<boolean>(true);

  const [date, setDate] = useState<string>(moment(new Date()).format("YYYY-MM-DD"));

  const toggleDrawer = () => {
    setOpen(!open);
  };
 
  const handleChangeDate = (e: any) => {    
    setDate(e.target.value);
  };

  const handleChangeTask = (taskName: string) => {
    setNewTask(taskName);
  };
  
  const handleChangeToggleButton = () => {
    setIsDate(prev => !prev);
  };

  const onSubmitTask = (date: string, taskTitle: string) => {
    if (date !== "" && taskTitle !== "") {
      toggleDrawer();
      addNewTask({
        variables: { objects: { id: 5, title: taskTitle, date: date, team_id: loggedTzoer.team.id } }
      });
    }
  };

  const fixFormatHour = (hour: string) => 
    moment().toISOString().split("T")[0] + "T" + hour + ":00+00:00";
  
  const fixFormatDate = (date: string) =>
    date + "T00:00+00:00";

  const { data: tasks } = useSubscription<TaskGQL>(GET_TASKS_BY_TEAM_ID, {
    variables: {
      team_id: loggedTzoer.team.id
    }
  });

  const [addNewTask, { loading: insertTaskLoading }] = useMutation<
  AffectedRowsGQL,
  { objects: AddTask }
>(ADD_TASK);

const [removeTask, { loading: removeTaskLoading }] = useMutation<
  AffectedRowsGQL,
  { deleted_task_id: number }
  >(DELETE_TASK_BY_ID, {
    onCompleted: () => {
    }
  });

  const tasksByTeam = tasks ? tasks.tasks : [];

  if (removeTaskLoading || insertTaskLoading) {
   return (
      <div className={classes.loaderOrErrorContainer}>
        <CircularProgress size={80} color='primary' />
      </div>
    );
  }

  return (
    <Paper className={classes.paper}>
      <Typography color='secondary' className={classes.title}>המשימות שלי</Typography>
      <List className={classes.tasksList}>
      {tasksByTeam.map((task: Task) => (
        <MyTask
          key={task.id}
          id={task.id}
          title={task.title}
          date={task.date}
          deleteTask={removeTask}
        />
      ))}
    </List>
      <div className={classes.addTask}>
      <IconButton aria-label="add" color="default" disabled={true}>
        <AddCircleOutline />
      </IconButton>
      <Input placeholder="משימה חדשה..." value={newTask} onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangeTask(event.target.value)} />
      {newTask !== "" && <IconButton aria-label="time" color="default" onClick={toggleDrawer}>
        <AccessTime />
      </IconButton>}
      </div>
      <div className={classes.divDrawer}>
        <Drawer anchor='bottom' open={open} onClose={toggleDrawer}>
          <div className={classes.paperDrawer}>
            <div className={classes.time}>
              <Typography className={classes.drawerTitle}>לא נקבע דדליין?</Typography>
            </div>  
            <div className={classes.selectDiv}>
            <div className={classes.selectDate}>
              <CalendarToday />
              <Typography>{DATE}</Typography>
              <Switch
                checked={isDate}
                onChange={handleChangeToggleButton}
              />
              <AccessTime />
              <Typography>{HOUR}</Typography>
              <Switch
                checked={!isDate}
                onChange={handleChangeToggleButton}
              />
            </div>   
            <TextField 
              name="dateField" 
              label={isDate ? DATE : HOUR} 
              type={isDate ? "date" : "time"} 
              InputLabelProps={{
                shrink: true
              }}
              value={date}
              onChange={handleChangeDate}
            />
            </div>
            <div className={classes.time}>
              <Chip
                className={classes.timeButton}
                color='primary'
                label='משימה חדשה'
                onClick={() => onSubmitTask(isDate ? fixFormatDate(date) : fixFormatHour(date), newTask)}
              />
            </div>
          </div>
        </Drawer>
      </div>
    </Paper>
  );
};

export default MyTasks;
