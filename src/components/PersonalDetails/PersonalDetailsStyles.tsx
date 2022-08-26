import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(-0.6),
    fontSize: 19,
  },
  name: {
    fontSize: 23,
    fontWeight: 600
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  exit: {
    marginTop: theme.spacing(-0.5),
    marginLeft:  theme.spacing(-0.5),
  },
  roleChip: {
    width: '100%',
    fontSize: 17,
  },
  roleContainer: {
    height: theme.spacing(5),
    marginTop: theme.spacing(-1.5),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}));
