import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
    card: {
        display: 'flex',
        margin: 10,
    },
    cardTitel: {
        fontSize: 17,
        fontWeight: 600,
        marginRight: 13,
        marginLeft: 13,
    },
    cardSubTitel: {
        fontSize: 15,
        marginRight: 13,
        marginLeft: 13,
        direction: 'rtl'

    },
    avatar: {
        borderRadius: '50%',
        width: theme.spacing(9),
        height: theme.spacing(9)
    }
}));
