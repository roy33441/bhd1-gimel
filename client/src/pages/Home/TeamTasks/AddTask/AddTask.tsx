import { FC, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useMutation } from '@apollo/client/react/hooks/useMutation';

import { useStyles } from './AddTaskStyles';
import { format } from 'date-fns';
import { ADD_TASK } from 'queries/tasksQueries';
import auth from 'common/auth';

const AddTask: FC = () => {
  const classes = useStyles();

  const teamId = auth.getLoggedTzoer().team.id;
  const [description, setDescription] = useState<string>('');
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const [addTask] = useMutation(ADD_TASK, {
    variables: {
      object: {
        team_id: teamId,
        description,
        deadline: format(selectedDate as Date, 'yyyy-MM-dd')
      }
    }
  });

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleChangeDescriptionInput = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setDescription(event.target.value as string);
  };

  const handleAddNewTask = (): void => {
    addTask();
    setDescription('');
    setSelectedDate(new Date());
  };

  return (
    <>
      <ListItem className={classes.container}>
        <IconButton onClick={handleAddNewTask} disabled={description === ''}>
          <AddCircleOutlineIcon />
        </IconButton>
        <TextField
          className={classes.input}
          value={description}
          onChange={handleChangeDescriptionInput}
          placeholder='הוסף משימה'
        />
        <IconButton onClick={() => setOpenDrawer(true)} className={classes.deadlineButton}>
          <AccessTimeIcon />
        </IconButton>
      </ListItem>
      <Drawer anchor='bottom' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Typography className={classes.title}>לא נקבע דדליין?</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='dd-MM-yyyy'
              margin='normal'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
      </Drawer>
    </>
  );
};

export default AddTask;
