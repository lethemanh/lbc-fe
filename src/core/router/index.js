import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import requireLogin from './middlewares/auth.guard';
import routes from './routes';

const GLOBAL_GUARDS = [requireLogin];

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      <GuardProvider guards={GLOBAL_GUARDS} loading="Loading...">
        <Route
          render={routeProps =>
            children(
              <Switch>
                {routes.map(({ component, error, exact, ignoreGlobal, loading, meta, path }, index) => (
                  <GuardedRoute
                    key={index}
                    component={component}
                    exact={exact}
                    error={error}
                    ignoreGlobal={ignoreGlobal}
                    loading={loading}
                    meta={meta}
                    path={path}
                  />
                ))}
              </Switch>,
              routeProps
            )
          }
        />
        <Redirect from="/" to="/"/>
      </GuardProvider>
    </BrowserRouter>
  );
};

Router.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Router;
