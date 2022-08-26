import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface buttonProps {
  color: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'inline-block',
    textAlign: 'center'
  },
  label: {
    fontSize: 17,
    marginTop: theme.spacing(-1.8)
  },
  button: {
    backgroundColor: (props: buttonProps) => props.color,
    width: 59,
    height: 59
  },
  imageIcon: {
    height: '100%'
  },
}));
