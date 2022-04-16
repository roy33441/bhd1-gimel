import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  topContainer: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  fab: {
    marginRight: theme.spacing(2)
  }
}));
