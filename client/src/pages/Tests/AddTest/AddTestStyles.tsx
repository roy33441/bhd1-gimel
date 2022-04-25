import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        textAlign: 'right',
        direction: 'rtl',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        padding: theme.spacing(1),
        width: '100%',
        borderRadius: theme.spacing(1.5)
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
    },
    bottomHeader: {
        display: 'flex',
        justifyContent: 'end'
    },
    topHeader: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'end',
        marginTop: theme.spacing(-2),
        width: '90%',
    },
    finishChip: {
        fontSize: 15,
        backgroundColor: theme.palette.success.main,
        height: '80%',
        width: '25%'
    },
    newChip: {
        fontSize: 15,
        backgroundColor: theme.palette.info.dark,
        height: '80%',
        width: '25%'
    },
    textFields: {
        margin: 3,
        width: 200,
    },
    labelRoot: {
        right: 0
    },
    shrink: {
        transformOrigin: 'top right'
    },
    startButton: {
        fontSize: 17,
        border: '2px solid'
    },
    imageIcon: {
        height: '100%'
    }
}));
