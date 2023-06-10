import { FC, useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import { Link, useHistory } from "react-router-dom";

import { useStyles } from "./BottomBarStyles";

const BottomBar: FC = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const routesPaths: Record<string, number> = {
    "bhd1-gimel/attendance": 0,
    "bhd1-gimel/home": 1,
    "bhd1-gimel/tests": 2,
  };

  const [value, setValue] = useState<number>(
    routesPaths[history.location.pathname] || routesPaths["/bhd1-gimel/home"]
  );

  const homeIcon: JSX.Element = (
    <Icon>
      <img
        className={classes.imageIcon}
        src="bhd1-gimel/icons/home.svg"
        alt="home"
      />
    </Icon>
  );

  const attendanceIcon: JSX.Element = (
    <Icon>
      <img
        className={classes.imageIcon}
        src="attendance/icons/attendance.svg"
        alt="attendance"
      />
    </Icon>
  );

  const testIcon: JSX.Element = (
    <Icon>
      <img className={classes.imageIcon} src="icons/test.svg" alt="test" />
    </Icon>
  );

  return (
    <BottomNavigation
      className={classes.BottomBar}
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        className={classes.navigationAction}
        component={Link}
        to="/bhd1-gimel/attendance"
        label='מצ"ל'
        icon={attendanceIcon}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        component={Link}
        to="/bhd1-gimel/home"
        label="בית"
        icon={homeIcon}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        component={Link}
        to="/bhd1-gimel/tests"
        label="טפסים"
        icon={testIcon}
      />
    </BottomNavigation>
  );
};

export default BottomBar;
