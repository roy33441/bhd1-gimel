import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
    },
    checkbox: {
        marginRight: theme.spacing(-1),
        marginLeft: theme.spacing(1),
        borderColor: "red"
    },
    dateChip: {
        fontSize: 15,
        backgroundColor: theme.palette.info.dark,
        height: '20%',
    },
    task: {
        flexDirection: 'row'
    },
}));
