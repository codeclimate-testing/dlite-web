'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { pathForPage }                        from '../helpers/navigation/page';
import { alicePath }                          from '../helpers/alice-path';

import Home                                   from '../presentations/home.jsx';
import ChooseLanguage                         from './get-started/choose-language-page.jsx';
import ChooseApplication                      from './get-started/choose-application-page.jsx';
import LoggedIn                               from './get-started/logged-in-page.jsx';
import GetStartedRoutes                       from './get-started/routes.jsx';
import MyBasicsRoutes                         from './my-basics/routes.jsx';
import MyHistoryRoutes                        from './my-history/routes.jsx';
import VotingRoutes                           from './voter-registration/routes.jsx';
import ConclusionRoutes                       from './conclusion/routes.jsx';
import OrganDonationRoutes                    from './organ-donation/routes.jsx';
import CDLRoutes                              from './cdl/routes.jsx';


class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/links') }                     exact component={Home} />

        <Route path={ alicePath('/')}                           exact component={ChooseApplication} />
        <Route path={ alicePath('/choose-language')}            component={ChooseLanguage} />
        <Route path={ alicePath('/choose-application')}         component={ChooseApplication}/>
        <Route path={ alicePath('/logged-in')}                  component={LoggedIn} />
        <CDLRoutes />

        <GetStartedRoutes />
        <MyBasicsRoutes />
        <MyHistoryRoutes />
        <VotingRoutes />
        <OrganDonationRoutes />
        <ConclusionRoutes />
      </div>
    );
  }
}

export default Router;
