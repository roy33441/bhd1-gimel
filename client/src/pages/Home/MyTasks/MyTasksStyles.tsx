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
    justifyContent: 'center',
    flexDirection: "column"
  },
  title: {
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
    fontSize: 19,
    color: "#000"
  },
  task: {
    flexDirection: 'row'
  },
  addTask: {
    flexDirection: "row"
  },
  divDrawer: {
    backgroundColor: '#D4D8EC',
    borderTopLeftRadius: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(1.5),
  },
  paperDrawer: {
    borderTopLeftRadius: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(1.5),
    backgroundColor: '#D4D8EC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9
  }, 
  drawerTitle: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 600
  },
  time: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  timeButton: {
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1.5),
    width: theme.spacing(17),
  },
  selectTime: {
    flexDirection: "column"
  },
  selectDate: {
    flexDirection: "row"
  },
  selectDiv: {
    flexDirection: "column"
  },
  tasksList: {
    maxHeight: 650,
    overflow: 'auto'
  },
  loaderOrErrorContainer: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
}));
