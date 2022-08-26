import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  statusContainer: {
    color: '#000000'
  },
  currStatusContainer: {
    color: '#F24C00'
  },
  number: {
    fontSize: 28,
    fontWeight: 400
  },
  status: {
    marginTop: theme.spacing(-1.6),
    fontSize: 16
  }
}));
