'use strict';

import React, {Component}         from 'react';
import { connect }                from 'react-redux';
import HomeLink                   from '../presentations/home-link.jsx';

import {
  CaliforniaResidencyDocuments,
  MedicalDocuments,
  RealIdDocuments,
  SocialSecurityDocuments,
  VeteransDocuments,
  BulletList
} from '../presentations/documents/index.js';

const RequiredDocumentsHandler = (props) => {
  let documentList = [
    <RealIdDocuments realID={props.realID} key='real-id'/>,
    <SocialSecurityDocuments socialSecurity={props.socialSecurity} key='social-security'/>,
    <CaliforniaResidencyDocuments key='ca-residency'/>,
    <VeteransDocuments veteransService={props.veteransService} key='proof-veteran-services'/>,
    <MedicalDocuments medicalHistory={props.medicalHistory} key='medical-information'/>
  ];

  return (
    <div>
    <HomeLink/>
      <div className='required-documents'>
        <h3>Here's what you need to bring to the DMV</h3>
        <p> Below is a list of what you will need to bring to a DMV office visit to complete your application.
        You will need to bring original versions of all documents listed below, as photocopies and laminated
        versions are not accepted.
        </p>

        <h4>We need original documents to confirm the following:</h4>
        <BulletList
          socialSecurity     = { props.socialSecurity }
          veteransService    = { props.veteransService }
          medicalHistory     = { props.medicalHistory }
          realID             = { props.realID }
        />

        <br></br>
          { documentList }
        <hr></hr>

        <p>If you have any questions, please reach out—we’re here to help!</p>
        <p>Telephone: 1-800-777-0133</p>
        <p>Hearing Impaired: TTY 1-800-368-4327</p>
        <p>Call Center business hours are: Monday, Tuesday, Thursday, Friday 8 am to 5 pm, and Wednesday, 9am to 5pm.</p>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    socialSecurity:   state.application.socialSecurity,
    veteransService:  state.application.veteransService,
    medicalHistory:   state.application.medicalHistory,
    realID:           state.application.realID
  };
};

export default connect(mapStateToProps)(RequiredDocumentsHandler);
