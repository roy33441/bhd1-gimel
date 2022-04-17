import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  notReportedContainer: {
    marginTop: theme.spacing(2),
    height: '33%'
  },
  list: {
    marginTop: theme.spacing(-2),
    maxHeight: 170,
    overflow: 'auto'
  },
  title: {
    fontSize: 13,
    textAlign: 'center'
  }
}));
