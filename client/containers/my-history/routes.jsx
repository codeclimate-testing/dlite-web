'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';

import MedicalHistory                         from './medical-history-form-container.jsx';
import CardHistory                            from './card-history-page.jsx';
import NamesHistory                           from './names-history-form-container.jsx';
import LicenseIssues                          from './license-issues-form-container.jsx';
import VeteransService                        from './veterans-service-form-container.jsx';

import {
  iddlPath,
  editPath,
  addPath
}      from '../../helpers/alice-path';

const MyHistoryRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/my-history/medical-history' ) }        component={MedicalHistory} />
      <Route path={ editPath('/my-history/medical-history' ) }        component={MedicalHistory} />
      <Route path={ addPath('/my-history/medical-history' ) }         component={MedicalHistory} />

      <Route path={ iddlPath('/my-history/license-and-id')}           component={CardHistory} />
      <Route path={ editPath('/my-history/license-and-id')}           component={CardHistory} />
      <Route path={ addPath('/my-history/license-and-id')}            component={CardHistory} />

      <Route path={ iddlPath('/my-history/names' ) }                  component={NamesHistory} />
      <Route path={ editPath('/my-history/names' ) }                  component={NamesHistory} />

      <Route path={ iddlPath('/my-history/license-issues')}           component={LicenseIssues} />
      <Route path={ editPath('/my-history/license-issues')}           component={LicenseIssues} />
      <Route path={ addPath('/my-history/license-issues')}            component={LicenseIssues} />

      <Route path={ iddlPath('/my-history/veterans-service')}         component={VeteransService}   />
      <Route path={ editPath('/my-history/veterans-service')}         component={VeteransService}   />
    </div>
  );
};

export default MyHistoryRoutes;