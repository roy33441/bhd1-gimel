import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginRight: theme.spacing(-3.5),
    width: 'auto',
    paddingTop: 'revert',
    paddingBottom: 'revert'
  },
  description: {
    textAlign: 'start',
    marginRight: theme.spacing(-1)
  },
  listItemText: {
    fontWeight: 300,
    fontSize: 16
  },
  divider: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: theme.spacing(-1)
  },
  deadlineChip: {
    fontSize: 13,
    marginLeft: theme.spacing(3)
  },
  deleteButton: {
    marginLeft: theme.spacing(-3)
  },
  input: {
    width: '200%'
  },
  deadlineButton: {
    marginLeft: theme.spacing(-4)
  },
  drawerContainer: {
    backgroundColor: '#D4D8EC',
    height: theme.spacing(25),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    marginTop: theme.spacing(1),
    fontSize: 22,
    fontWeigth: 600
  }
}));
