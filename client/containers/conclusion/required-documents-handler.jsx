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
    socialSecurity:         state.application.socialSecurity,
    veteransService:        state.application.veteransService,
    medicalHistory:         state.application.medicalHistory,
    realID:                 state.application.realID,
    reducedFee:             state.application.reducedFee,
    dateOfBirth:            state.application.dateOfBirth,
    licenseAndIdHistory:    state.application.licenseAndIdHistory,
    reducedFee:             state.application.reducedFee
  };
};

export default connect(mapStateToProps)(Page);
