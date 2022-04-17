import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface AttendanceStylesProps {
  isEditingReport: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  },
  mainContent: {
    marginTop: theme.spacing(-1.25),
    backgroundColor: '#FEEEE2',
    width: theme.spacing(41.5),
    height: theme.spacing(65.4)
  },
  divider: {
    backgroundColor: '#6B6A6A'
  },
  saveReportChip: {
    fontSize: 15,
    height: '80%',
    width: '30%',
    zIndex: 1,
    marginTop: theme.spacing(-1.2)
  },
  editReportChip: {
    backgroundColor: theme.palette.info.light,
    '$clickable&:hover, $clickable&:focus, $deletable&:focus': theme.palette.info.light,
    color: 'white',
    fontSize: 15,
    height: '80%',
    width: '30%',
    zIndex: 1,
    marginTop: theme.spacing(-1.2)
  }
}));
