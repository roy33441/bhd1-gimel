import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    minWidth: theme.spacing(2.5),
    marginRight: theme.spacing(1)
  },
  name: {
    textAlign: 'start'
  },
  listItemText: {
    fontWeight: 500
  },
  divider: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: theme.spacing(-1)
  }
}));
