import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  BottomBar: {
    backgroundColor: theme.palette.warning.main,
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 1000,
  },
  imageIcon: {
    height: "100%",
  },
  navigationAction: {
    marginTop: theme.spacing(1),
  },
}));
