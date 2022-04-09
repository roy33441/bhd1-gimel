import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  loaderContainer: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  testsList: {
    maxHeight: 650,
    overflow: 'auto'
  }
}));
