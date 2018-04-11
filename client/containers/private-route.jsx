'use strict';
import React                          from 'react';
import { Route, Redirect, Switch }    from 'react-router-dom';
import { connect }                    from 'react-redux';
import { signInURL }                  from '../helpers/data/pathnames';
import { requireLogIn }               from '../helpers/data/application';
import {
  alicePath,
  iddlPath,
  cdlPath
} from '../helpers/alice-path';
import CDLRoutes                      from './cdl/routes.jsx';
import IDDLRoutes                     from './iddl/routes.jsx';
import { NotFound }                   from './page-not-found.jsx';


const PrivateRoute = (props) => {

  if (requireLogIn(props.location.pathname, props.isLoggedIn)) {
    return (<Redirect to={{pathname: `${signInURL()}`}} />)
  }

  else {
    return (
      <Switch>
        <Route path={ alicePath('/cdl/*')}             exact component={CDLRoutes} />
        <Route path={ alicePath('/id-and-license/*')}  exact component={IDDLRoutes}/>
        <Route path='*'                                       component={NotFound } />
      </Switch>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn
  }
};

export default connect(mapStateToProps, null)(PrivateRoute);
