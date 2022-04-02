import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Tests from 'pages/Tests/Tests';
import Attendance from 'pages/Attendance/Attendance';

const Router: FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route path='/tests'>
        <Tests />
      </Route>
      <Route path='/attendance'>
        <Attendance />
      </Route>
      <Redirect to='/home' />
    </Switch>
  );
};

export default Router;
