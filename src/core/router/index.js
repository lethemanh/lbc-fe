import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import requireLogin from './middlewares/auth.guard';
import routes from './routes';

const GLOBAL_GUARDS = [requireLogin];

const Router = ({ children, setToken }) => {
  useEffect(() => {
    setToken(Cookies.get('token'));
  }, []);
  
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
      </GuardProvider>
    </BrowserRouter>
  );
};

const mapDispatch = (dispatch) => ({
  setToken: dispatch.auth.setToken
});

Router.propTypes = {
  children: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired
};

export default connect(null, mapDispatch)(Router);
