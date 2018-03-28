'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import OrganDonation                          from './organ-donation-form-container.jsx';

import {
  iddlPath,
  editPath
}      from '../../../helpers/alice-path';

const MyHistoryRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/organ-donation' ) }     component = {OrganDonation}  />
      <Route path={ editPath('/organ-donation' ) }     component = {OrganDonation}  />
    </div>
    );
};

export default MyHistoryRoutes;