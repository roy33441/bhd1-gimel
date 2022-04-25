import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderOrErrorContainer: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  testsList: {
    maxHeight: 650,
    overflow: 'auto'
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 67,
    marginRight: 10,
    width: '95%'
  }
}));
