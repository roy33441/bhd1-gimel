import { FC, useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './LoginStyles';
import { LOGIN_TZOER } from 'queries/tzoerQueries';
import { Tzoer, TzoerGQL } from 'types/tzoer';
import auth from 'common/auth';

interface State {
  id: string;
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

interface GetLoginTzoerVars {
  personal_id: string;
  password: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
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

  const [errorLogin, setErrorLogin] = useState<boolean>(false);

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const onCompleteLoginTzoer = (data: TzoerGQL) => {
    if (!data.tzoer[0]) return setErrorLogin(true);

    const loggedTzoer: Tzoer = {
      ...data.tzoer[0],
      team: (({ id, name }) => ({ id, name }))(data.tzoer[0].team),
      pluga: (({ id, name }) => ({ id, name }))(data.tzoer[0].team.pluga)
    };

    auth.saveLoggedTzoer(loggedTzoer);
    history.push('/home');
  };

  const [getLoginTzoer, { loading }] = useLazyQuery<TzoerGQL, GetLoginTzoerVars>(LOGIN_TZOER, {
    onCompleted: onCompleteLoginTzoer
  });

  return (
    <>
      <List className={classes.container}>
        <img className={classes.imageIcon} src='icons/logo.svg' alt='logo' />
        <ListItem className={classes.root}>
          <FormControl className={classes.textField}>
            <InputLabel htmlFor='standard-adornment-password'>שם משתמש</InputLabel>
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
          {!loading ? (
            <Chip
              className={classes.loginButton}
              color='primary'
              label='יאללה שנתחבר'
              onClick={() =>
                getLoginTzoer({
                  variables: { personal_id: values.id, password: values.password }
                })
              }
              disabled={!values.id || !values.password}
            />
          ) : (
            <Chip
              icon={<CircularProgress size={30} />}
              className={classes.loginButton}
              color='primary'
            />
          )}
        </ListItem>
      </List>
      <div className={classes.copyRightContainer}>
        <div className={classes.copyRightHeader}>
          <CopyrightIcon />
          <Typography className={classes.copyRightTitle}>פותח ע"י צוערי מעוז 76</Typography>
        </div>
        <Typography>תום בן ארויה, יואל פבלובסקי, רן שליטין</Typography>
      </div>
      <Snackbar open={errorLogin} autoHideDuration={2500} onClose={() => setErrorLogin(false)}>
        <Alert severity='warning'>שם משתמש או סיסמא אינם נכונים</Alert>
      </Snackbar>
    </>
  );
};

export default Login;
