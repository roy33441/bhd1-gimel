import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: '#FFFFFF',
    width: theme.spacing(17),
    height: theme.spacing(32),
    borderRadius: theme.spacing(1.5),
    justifyContent: 'center',
  },
  editIcon: {
    color: 'white',
  },
  header: {
    backgroundColor: '#F24C00',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(1.5),
    padding: 2,
    
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: theme.spacing(27)
  },
  title: {
    fontSize: 15,
    fontWeight: 550,
    marginRight: 6
  },
  luz: {
    overflowY: 'scroll',
    borderRadius: theme.spacing(1.5),
    height: theme.spacing(27),

  },
  luzItem: {
    fontSize: 12,
    margin: 3
  },
  paperDrawer: {
    borderTopLeftRadius: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(1.5),
    backgroundColor: '#D4D8EC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9
  }, 
  drawerTitel: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 600
  },
  updateContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10

  },
  loaderErrorContainer: {
    height: '30vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  divDrawer: {
    backgroundColor: '#D4D8EC',
    borderTopLeftRadius: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(1.5),

  },
  updateButton: {
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1.5),
    width: theme.spacing(17),
  },
  textInput: {
    width: theme.spacing(40),
    overflowY: 'scroll',

  }
}));
