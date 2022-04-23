import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Tests from 'pages/Tests/Tests';
import AttendancePage from 'pages/Attendance/Attendance';
import Login from 'pages/Login/Login';
import TopBar from 'components/TopBar/TopBar';
import BottomBar from 'components/BottomBar/BottomBar';
import ProtectedRoute from 'components/ProtectedRoute';
import PublicRoute from 'components/PublicRoute';
import WithAuthentication from 'components/WithAuthentication';

const Router: FC = (): JSX.Element => (
  <Switch>
    <PublicRoute path='/login' component={Login} />
    <ProtectedRoute exact path='/' render={() => <Redirect to='/home' />} />
    <WithAuthentication>
      <>
        <TopBar />
        <div>
          <Route path='/home' component={Home} />
          <Route path='/tests' component={Tests} />
          <Route path='/attendance' component={AttendancePage} />
          {/* <Redirect to='/home' /> */}
        </div>
        <BottomBar />
      </>
    </WithAuthentication>
  </Switch>
);

export default Router;
