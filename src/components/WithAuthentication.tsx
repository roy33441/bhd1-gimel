import { FC } from "react";
import { Redirect } from "react-router";

import auth from "common/auth";

interface WithAuthenticationProps {
  children: JSX.Element;
}

const WithAuthentication: FC<WithAuthenticationProps> = ({
  children,
}): JSX.Element =>
  auth.isLoggedTzoer() ? children : <Redirect to={"/bhd1-gimel/login"} />;

export default WithAuthentication;
