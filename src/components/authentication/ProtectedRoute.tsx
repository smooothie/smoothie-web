import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

import { AUTH_TOKEN_COOKIE } from 'helpers/constants';
import urls from 'helpers/urls';

const ProtectedRoute: React.FC<RouteProps> = ({
  render,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const isLoggedIn = Cookies.get(AUTH_TOKEN_COOKIE);
      if (!isLoggedIn) {
        return <Redirect to={urls.login} />;
      }

      if (Component) return <Component {...props} />;
      if (render) return render(props);
      return null;
    }}
  />
);

export default ProtectedRoute;
