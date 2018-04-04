'use strict';

import React                                  from 'react';
import { Route, Switch }                              from 'react-router-dom';
import {
  alicePath,
  iddlPath,
  cdlPath
} from '../helpers/alice-path';
import Home                                   from '../presentations/home.jsx';
import ChooseLanguage                         from './choose-language-page.jsx';
import ChooseApplication                      from './choose-application-page.jsx';
import OpenApplications                       from './intro/open-applications-page.jsx';

import IDMe                                   from './id-me-page.jsx';
import LoggedIn                               from './logged-in-page.jsx';

import Disclaimers                            from './iddl/get-started/disclaimers-page.jsx';
import CDLDisclaimers                         from './cdl/cdl-disclaimers.jsx';
import PrivateRoute                           from './private-route.jsx';

class Router extends React.Component {

  render() {
    return (
      <Switch className='routes'>
        <Route path={ alicePath('/links') }                                 exact component={Home} />
        <Route path={ alicePath('/')}                                       exact component={ChooseApplication} />
        <Route path={ alicePath('/choose-language')}                              component={ChooseLanguage} />
        <Route path={ alicePath('/choose-application')}                           component={ChooseApplication}/>
        <Route path={ alicePath('/disclaimers') }                           exact component={Disclaimers} />
        <Route path={ iddlPath('/sign-in') }                                exact component={IDMe} />
        <Route path={ cdlPath('/sign-in') }                                 exact component={IDMe} />
        <Route path={ cdlPath('/disclaimers') }                             exact component={CDLDisclaimers} />
        <Route path={ alicePath('/logged-in/:user')}                              component={LoggedIn} />
        <Route path={ alicePath('/open-applications')}                            component={OpenApplications} />

        <PrivateRoute pathURL={ alicePath('*')}                          />
        {/*<PrivateRoute pathURL={ alicePath('/id-and-license/*')}                   component={IDDLRoutes} />*/}
      </Switch>
    );
  }
}

export default Router;
