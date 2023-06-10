import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/Home/Home";
import Tests from "pages/Tests/Tests";
import AttendancePage from "pages/Attendance/Attendance";
import Login from "pages/Login/Login";
import TopBar from "components/TopBar/TopBar";
import BottomBar from "components/BottomBar/BottomBar";
import ProtectedRoute from "components/ProtectedRoute";
import PublicRoute from "components/PublicRoute";
import WithAuthentication from "components/WithAuthentication";

const Router: FC = (): JSX.Element => (
  <Switch>
    <PublicRoute path="/bhd1-gimel/login" component={Login} />
    <ProtectedRoute
      exact
      path="/"
      render={() => <Redirect to="/bhd1-gimel/home" />}
    />
    <WithAuthentication>
      <>
        <TopBar />
        <div style={{ marginBottom: "10vh" }}>
          <Route path="/bhd1-gimel/home" component={Home} />
          <Route path="/bhd1-gimel/tests" component={Tests} />
          <Route path="/bhd1-gimel/attendance" component={AttendancePage} />
          {/* <Redirect to='/home' /> */}
        </div>
        <BottomBar />
      </>
    </WithAuthentication>
  </Switch>
);

export default Router;
