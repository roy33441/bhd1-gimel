import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  topBar: {
    backgroundColor: theme.palette.secondary.light,
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  roleChip: {
    width: '100%'
  },
  drawerContainer: {
    backgroundColor: '#D4D8EC'
  }
}));
