import { FC, useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import { Link, useHistory } from 'react-router-dom';

import { useStyles } from './BottomBarStyles';

const BottomBar: FC = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const routesPaths: Record<string, number> = {
    '/attendance': 0,
    '/home': 1,
    '/tests': 2
  };

  const [value, setValue] = useState<number>(
    routesPaths[history.location.pathname] || routesPaths['/home']
  );

  const homeIcon: JSX.Element = (
    <Icon>
      <img className={classes.imageIcon} src='icons/home.svg' alt='home' />
    </Icon>
  );

  const attendanceIcon: JSX.Element = (
    <Icon>
      <img className={classes.imageIcon} src='icons/attendance.svg' alt='attendance' />
    </Icon>
  );

  const testIcon: JSX.Element = (
    <Icon>
      <img className={classes.imageIcon} src='icons/test.svg' alt='test' />
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
        to='/attendance'
        label='מצ"ל'
        icon={attendanceIcon}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        component={Link}
        to='/home'
        label='בית'
        icon={homeIcon}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        component={Link}
        to='/tests'
        label='ב"ב'
        icon={testIcon}
      />
    </BottomNavigation>
  );
};

export default BottomBar;
