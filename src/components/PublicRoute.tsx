import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router";

import auth from "common/auth";

const PublicRoute: FC<RouteProps> = (routeProps) =>
  auth.isLoggedTzoer() ? (
    <Redirect to={"/bhd1-gimel/home"} />
  ) : (
    <Route {...routeProps} />
  );

export default PublicRoute;
