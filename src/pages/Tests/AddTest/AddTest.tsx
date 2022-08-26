import { FC, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ListItem from '@material-ui/core/ListItem';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LinkIcon from '@material-ui/icons/Link';
import { useStyles } from './AddTestStyles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { InputAdornment, TextField } from '@material-ui/core';
import { ADD_TEST } from 'mutations/testMutation';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import { GET_TESTS } from 'queries/testsQueries';


interface AddTestProps {
  closeAddTest: Function
}

const AddTest: FC<AddTestProps> = (props): JSX.Element => {
  const { closeAddTest } = props;

  const [title, setTitle] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [numOfQuestions, setNumOfQuestions] = useState('');
  const [addTest] = useMutation(ADD_TEST, {
    refetchQueries: [GET_TESTS]
  });

  const classes = useStyles();

  const handleChangeTitle = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setTitle(event.target.value as string);
  };

  const handleChangeNumOfQuestions = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setNumOfQuestions(event.target.value as string);
  };

  const handleChangeLink = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setLink(event.target.value as string);
  };

  const onSubmitAddTest = () => {
    addTest({
      variables: { objects: { questions_number: Number(numOfQuestions), title: title, form_url: link } }
    });
    closeAddTest()
  }

  const handleCloseAddTest = () => {
    closeAddTest()
  }

  return (
    <ListItem className={classes.container}>
      <Paper className={classes.card}>
        <div>
          <div className={classes.topHeader}>
            <IconButton onClick={handleCloseAddTest}>
              <HighlightOffIcon />
            </IconButton>
          </div>
          <div className={classes.textFields}>

            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <AssignmentIcon />
                  </InputAdornment>
                )
              }}
              size='small'
              value={title}
              onChange={handleChangeTitle}
              label='הוסף כותרת ל-ב"ב'
            />
          </div>

          <div className={classes.textFields}>

            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon />
                  </InputAdornment>
                )
              }}
              size='small'
              value={link}
              onChange={handleChangeLink}
              label='הוסף קישור'
            />
          </div>
          <div className={classes.textFields}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <HelpOutlineIcon />
                  </InputAdornment>
                )
              }}
              size='small'
              type="number"
              value={numOfQuestions}
              onChange={handleChangeNumOfQuestions}
              label='מספר שאלות'
            />
          </div>
        </div>
        <div className={classes.bottomHeader}>
          <Chip
            className={classes.startButton}
            icon={<ArrowLeftIcon />}
            color='secondary'
            label='הוסף ב"ב'
            disabled={(title === "" || link === "" || numOfQuestions === "" )}
            onClick={onSubmitAddTest}
          />
        </div>
      </Paper>
    </ListItem>
  );
};

export default AddTest;
