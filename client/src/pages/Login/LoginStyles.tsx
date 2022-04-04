import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
root: {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'center',
direction: 'ltr'
},
withoutLabel: {
marginTop: theme.spacing(3),
},
textField: {
margin: theme.spacing(1)
}

}));
