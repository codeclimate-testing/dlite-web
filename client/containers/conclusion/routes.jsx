'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { iddlPath }                           from '../../helpers/alice-path';
import AppointmentPreparation                 from './appointment-preparation-info.jsx';
import GuardianSignature                      from './guardian-signature-page.jsx';
import Summary                                from './summary-handler.jsx';
import RequiredDocuments                      from './required-documents-handler.jsx';

const ConclusionRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/guardian-signature') }             component={GuardianSignature} />
      <Route path={ iddlPath('/summary') }                        component={Summary} />
      <Route exact path={ iddlPath('/appointment-preparation/') } component={AppointmentPreparation} />
      <Route path={ iddlPath('/appointment-preparation/documents') } component={RequiredDocuments} />
    </div>
    );
};

export default ConclusionRoutes;