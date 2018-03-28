'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import GetStartedRoutes                       from './get-started/routes.jsx';
import MyBasicsRoutes                         from './my-basics/routes.jsx';
import MyHistoryRoutes                        from './my-history/routes.jsx';
import VotingRoutes                           from './voter-registration/routes.jsx';
import ConclusionRoutes                       from './conclusion/routes.jsx';
import OrganDonationRoutes                    from './organ-donation/routes.jsx';

const IDDLRoutes = () => {
  return (
    <div>
      <GetStartedRoutes />
      <MyBasicsRoutes />
      <MyHistoryRoutes />
      <VotingRoutes />
      <OrganDonationRoutes />
      <ConclusionRoutes />
    </div>
  );
};

export default IDDLRoutes;