'use strict';

import React, {Component}         from 'react';
import { connect }                from 'react-redux';
import Presentation               from '../../presentations/conclusion/required-documents-page.jsx';

const Page = (props) => {
  return (
    <Presentation
      {...props}
    />
  )
};


function mapStateToProps(state) {
  return {
    socialSecurity:         state.application.basics.socialSecurity,
    veteransService:        state.application.history.veteransService,
    medicalHistory:         state.application.history.medicalHistory,
    realID:                 state.application.realID,
    reducedFee:             state.application.IDApp.reducedFee,
    dateOfBirth:            state.application.basics.dateOfBirth,
    licenseAndIdHistory:    state.application.history.licenseAndIdHistory,
    reducedFee:             state.application.IDApp.reducedFee,
    locale:                 state.ui.locale,
    IDApp:                  state.application.IDApp,
    DLApp:                  state.application.DLApp
  };
};

export default connect(mapStateToProps)(Page);
