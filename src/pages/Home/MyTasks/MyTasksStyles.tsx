import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.info.main,
    width: theme.spacing(42),
    height: theme.spacing(33),
    borderRadius: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
