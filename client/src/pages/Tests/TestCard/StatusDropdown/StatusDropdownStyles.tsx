import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: -10,
    color: '#000000'
  },
  imageIcon: {
    height: '90%'
  }
}));
