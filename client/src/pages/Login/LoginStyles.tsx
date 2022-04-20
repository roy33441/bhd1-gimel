import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    direction: 'ltr'
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    margin: theme.spacing(1)
  },
  imageIcon: {
    width: '70%'
  },
  loginButton: {
    fontSize: 23,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2.5),
    width: '70%'
  },
  copyRightContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    alignItems: 'center'
  },
  copyRightHeader: {
    display: 'flex',
    flexDirection: 'row'
  },
  copyRightTitle: {
    fontWeight: 600
  }
}));
