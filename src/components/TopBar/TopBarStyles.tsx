import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  topBar: {
    backgroundColor: theme.palette.secondary.light,
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
  },
  roleChip: {
    width: "100%",
  },
  drawerContainer: {
    backgroundColor: "#D4D8EC",
  },
  iconButton: {
    backgroundColor: "transparent",
    border: "transparent",
    // borderRadius: '50%',
    width: theme.spacing(9.5),
    marginLeft: theme.spacing(0.8),
    marginTop: theme.spacing(-0.5),
  },
}));
