import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router";

import auth from "common/auth";

const ProtectedRoute: FC<RouteProps> = (routeProps) =>
  auth.isLoggedTzoer() ? (
    <Route {...routeProps} />
  ) : (
    <Redirect to={"/bhd1-gimel/login"} />
  );

export default ProtectedRoute;
