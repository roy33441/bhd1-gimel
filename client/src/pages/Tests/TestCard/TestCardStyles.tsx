import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    padding: theme.spacing(1),
    width: '100%',
    borderRadius: theme.spacing(1.5)
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  questions: {
    fontSize: 17,
    color: '#6B6A6A'
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    display: 'flex'
  },
  bottomHeader: {
    display: 'flex',
    justifyContent: 'end'
  },
  finishChip: {
    fontSize: 15,
    backgroundColor: theme.palette.success.main,
    height: '80%',
    width: '25%'
  },
  newChip: {
    fontSize: 15,
    backgroundColor: theme.palette.info.dark,
    height: '80%',
    width: '25%'
  },
  startButton: {
    fontSize: 17,
    border: '3px solid'
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    fontSize: 15
  },
  imageIcon: {
    height: '100%'
  }
}));
