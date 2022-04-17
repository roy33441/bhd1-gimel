import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface PresentListeStylesProps {
  isEditingReport: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  list: {
    marginTop: theme.spacing(-2),
    maxHeight: (props: PresentListeStylesProps) => (props.isEditingReport ? 150 : 220),
    overflow: 'auto'
  },
  presentContainer: {
    marginTop: (props: PresentListeStylesProps) => theme.spacing(props.isEditingReport ? 1 : 2),
    height: (props: PresentListeStylesProps) => (props.isEditingReport ? '30%' : '45%')
  },
  title: {
    fontSize: 13,
    textAlign: 'center'
  },
  closeButton: {
    paddingTop: 'initial'
  }
}));
