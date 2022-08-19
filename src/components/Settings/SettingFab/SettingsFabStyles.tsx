import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  
  infoTitle: {
    margin: theme.spacing(0.5),
    fontSize: 13,
    color: "#F24C00"
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
    fontSize: 18,
  },
  resetTitel:{
    margin: 8,
    marginTop: 19,
    fontWeight: 600,
    fontSize: 17,
  },
  buttontitel: {
    color: 'black',
    fontSize: 16,
  },
  importContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: "primary",
    fontSize: 10
    // margin: theme.spacing(5)
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
    direction: 'ltr',
    width: theme.spacing(24.5),
  },
  alert: {
    marginTop: theme.spacing(1)
  },
  smallButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2),
    width: theme.spacing(10),
    borderRadius: theme.spacing(3),
  },
  updateButton: {
    fontSize: 25,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2.5),
    width: theme.spacing(30),
  },
}))