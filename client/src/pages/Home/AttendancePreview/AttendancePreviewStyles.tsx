import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(23),
    height: theme.spacing(32),
    borderRadius: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'center'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center'
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 600
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 600,
  }
}));
