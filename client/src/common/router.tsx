import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Tests from 'pages/Tests/Tests';
import Attendance from 'pages/Attendance/Attendance';
import Login from 'pages/Login/Login';
import TopBar from 'components/TopBar/TopBar';
import BottomBar from 'components/BottomBar/BottomBar';

const Router: FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/(login)" component={LoginContainer}/>
      <Route exact path="/" component={LoginContainer}/>
      <Route component={DefaultContainer}/>
    </Switch>
  );
};

const LoginContainer = () => (
  <div>
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)

const DefaultContainer = () => (
  <div>
    <TopBar />
      <div>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/tests'>
          <Tests />
        </Route>
        <Route path='/attendance'>
          <Attendance />
        </Route>
      </div>
    <BottomBar />

  </div>
)

export default Router;
