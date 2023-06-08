import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(32),
    height: theme.spacing(32),
    borderRadius: theme.spacing(1.5),
    textAlign: "center",
  },
  loadingOrErrorContainer: {
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(32),
    height: theme.spacing(32),
    borderRadius: theme.spacing(1.5),
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 21,
    fontWeight: 600,
    marginTop: theme.spacing(0.7),
    marginBottom: theme.spacing(-1),
  },
  team: {
    fontSize: 18,
    marginRight: theme.spacing(3),
  },
  iconRoot: {
    position: "relative",
    left: theme.spacing(-0.5),
    top: theme.spacing(1),
    flex: 1,
  },
  imageIcon: {
    height: "100%",
  },
  dropdown: {
    marginRight: theme.spacing(-0.8),
  },
  circularProgressContainer: {
    width: 120,
    height: 120,
    marginTop: theme.spacing(1),
    marginRight: "auto",
    marginLeft: "auto",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1.6),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));
