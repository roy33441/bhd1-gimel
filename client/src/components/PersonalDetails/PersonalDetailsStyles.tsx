import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(-0.6),
    fontSize: 19
  },
  name: {
    fontSize: 23,
    fontWeight: 600
  },
  roleChip: {
    width: '100%',
    fontSize: 17
  },
  roleContainer: {
    marginTop: theme.spacing(-1.2),
    marginLeft: theme.spacing(-1.2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));
