'use strict';
import React                          from 'react';
import { Route, Redirect }            from 'react-router-dom';
import { signInURL }                  from '../helpers/data/pathnames';
import {
  requireLogIn,
  getAppNameCookie
} from '../helpers/data/cookies';

export function PrivateRoute ({component: Component, pathURL }){
  let appName = getAppNameCookie();
  let pathNameURL = signInURL(appName);

  return (
    <Route
      path={pathURL}
      render={(props) => requireLogIn(props)
        ? <Redirect to={{pathname: `${pathNameURL}`}} />
        : <Component {...props} />
      }
    />
  )
};