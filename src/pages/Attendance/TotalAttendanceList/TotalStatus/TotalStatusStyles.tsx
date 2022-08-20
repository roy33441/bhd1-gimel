import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(41.5),
    height: theme.spacing(11.4),
    borderRadius: theme.spacing(1.25),
    textAlign: 'center',
    zIndex: 1
  },
  team: {
    fontSize: 18,
    marginTop: theme.spacing(1)
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(-1.3)
  }
}));
