import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface MissingListeStylesProps {
  isEditingReport: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  missingContainer: {
    marginTop: theme.spacing(1),
    height: (props: MissingListeStylesProps) => (props.isEditingReport ? '30%' : '50%')
  },
  list: {
    marginTop: theme.spacing(-2),
    maxHeight: (props: MissingListeStylesProps) => (props.isEditingReport ? 140 : 230),
    overflow: 'auto'
  },
  title: {
    fontSize: 13,
    textAlign: 'center'
  },
  closeButton: {
    paddingTop: 'initial'
  },
  missingReason: {
    color: '#6B6A6A',
    fontSize: 13
  }
}));
