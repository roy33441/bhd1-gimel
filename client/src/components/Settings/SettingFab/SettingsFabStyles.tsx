import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  input: {
    display: 'none',
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
    margin: 8,
    fontWeight: 600,
    fontSize: 20,
    
  },
  buttontitel: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: 8,
    fontSize: 18,
  },
  importContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divDrawer: {
    backgroundColor: '#D4D8EC',
    borderTopLeftRadius: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(1.5),

  },
  button: { 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2),
    width: theme.spacing(25),

  },
  smallButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2),
    width: theme.spacing(10),

  },
  updateButton: {
    fontSize: 25,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2.5),
    width: theme.spacing(30),
  },
}))