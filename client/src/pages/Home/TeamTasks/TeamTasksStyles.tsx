import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.info.main,
    width: theme.spacing(42),
    height: theme.spacing(33),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1.5)
  },
  loadingOrErrorContainer: {
    backgroundColor: theme.palette.info.main,
    width: theme.spacing(42),
    height: theme.spacing(33),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1.5),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  listContainer: {
    maxHeight: 190,
    overflowY: 'auto',
    overflowX: 'hidden',
    marginTop: theme.spacing(-2)
  },
  title: {
    fontSize: 21,
    fontWeight: 600
  }
}));
