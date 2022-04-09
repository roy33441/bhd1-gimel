import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(23),
    height: theme.spacing(32),
    borderRadius: theme.spacing(1.5),
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: 21,
    fontWeight: 600,
    marginTop: theme.spacing(0.7)
  },
  iconRoot: {
    position: 'relative',
    left: theme.spacing(-1.5),
    top: theme.spacing(1.5),
    flex: 1
  },
  imageIcon: {
    height: '100%'
  },
  dropdown: {
    marginTop: theme.spacing(-0.6)
  },
  circularProgressContainer: {
    width: 120,
    height: 120,
    marginTop: theme.spacing(1),
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1.6),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
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
