import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    minWidth: theme.spacing(2.5),
    marginRight: theme.spacing(1)
  },
  name: {
    textAlign: 'start'
  },
  listItemText: {
    fontWeight: 500
  },
  divider: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: theme.spacing(-1)
  },
  missingChip: {
    fontSize: 13,
    height: '60%',
    width: '19%',
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  },
  presentChip: {
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main,
    marginLeft: theme.spacing(0.3),
    fontSize: 13,
    height: '60%',
    width: '19%'
  },
  missingReasonContainer: {
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    marginBottom: 20
  },
  inputMissingReason: {
    width: 125
  },
  labelRoot: {
    right: 0
  },
  shrink: {
    transformOrigin: 'top right'
  },
  enterButton: {
    marginBottom: theme.spacing(-2)
  }
}));
