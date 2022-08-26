import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    titel: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: 15,
        textAlign: 'center',
    },
    context: {
        fontSize: 15,
        textAlign: 'center',
        margin: 6

    }
}));
