import { FC, useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';

import { useStyles } from './LoginStyles';

interface State {
  id: string;
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const Login: FC = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState<State>({
    id: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickLogin = () => {
    if (values.id === '322298746' && values.password === 'Aa123456') {
      sessionStorage.setItem('tzoer_id', values.id);
      history.push('/home');
    } else {
      alert('סיסמא שגויה');
    }
  };

  return (
    <>
      <List className={classes.container}>
        <img className={classes.imageIcon} src='icons/logo.svg' alt='logo' />
        <ListItem className={classes.root}>
          <FormControl className={classes.textField}>
            <InputLabel htmlFor='standard-adornment-password'>תעודת זהות</InputLabel>
            <Input
              id='standard-adornment-password'
              value={values.id}
              onChange={handleChange('id')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </ListItem>
        <ListItem className={classes.root}>
          <FormControl className={classes.textField}>
            <InputLabel htmlFor='standard-adornment-password'>סיסמא</InputLabel>
            <Input
              id='standard-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </ListItem>
        <ListItem className={classes.root}>
          <Chip
            className={classes.loginButton}
            color='primary'
            label='יאללה שנתחבר'
            onClick={handleClickLogin}
          />
        </ListItem>
      </List>
    </>
  );
};

export default Login;
