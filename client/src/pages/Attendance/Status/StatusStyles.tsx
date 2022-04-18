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
  resetButton: {
    position: 'relative',
    right: theme.spacing(-0.8),
    top: theme.spacing(0.4),
    flex: 1,
    textAlign: 'end'
  },
  resetTitle: {
    color: '#7B8C7D',
    fontSize: 9
  },
  resetIcon: {
    color: '#7B8C7D',
    marginLeft: theme.spacing(-0.7),
    marginTop: theme.spacing(-2)
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(-1.3)
  }
}));
