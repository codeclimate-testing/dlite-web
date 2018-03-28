'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import {
  alicePath,
  iddlPath,
  cdlPath
} from '../helpers/alice-path';
import Home                                   from '../presentations/home.jsx';
import ChooseLanguage                         from './choose-language-page.jsx';
import ChooseApplication                      from './choose-application-page.jsx';

import IDMe                                   from './id-me-page.jsx';
import LoggedIn                               from './logged-in-page.jsx';

import Disclaimers                            from './iddl/get-started/disclaimers-page.jsx';
import CDLDisclaimers                         from './cdl/cdl-disclaimers.jsx';

import CDLRoutes                              from './cdl/routes.jsx';
import IDDLRoutes                             from './iddl/routes.jsx';
import { PrivateRoute }                       from './private-route.jsx';

class Router extends React.Component {
  render() {

    return (
      <div className='routes'>
        <Route path={ alicePath('/links') }                                 exact component={Home} />
        <Route path={ alicePath('/')}                                       exact component={ChooseApplication} />
        <Route path={ alicePath('/choose-language')}                              component={ChooseLanguage} />
        <Route path={ alicePath('/choose-application')}                           component={ChooseApplication}/>
        <Route path={ alicePath('/disclaimers') }                                 component={Disclaimers} />
        <Route path={ iddlPath('/sign-in') }                                      component={IDMe} />
        <Route path={ cdlPath('/sign-in') }                                       component={IDMe} />
        <Route path={ cdlPath('/disclaimers') }                                   component={CDLDisclaimers} />
        <Route path={ alicePath('/logged-in')}                                    component={LoggedIn} />

        <PrivateRoute pathURL={ alicePath('/cdl')}                                component={CDLRoutes} />
        <PrivateRoute pathURL={ alicePath('/id-and-license')}                     component={IDDLRoutes} />
      </div>
    );
  }
}

export default Router;
