'use strict'
import React                      from 'react';
import HomeLink                   from '../home-link.jsx';

import Page                       from '../../containers/page.jsx';
import {
  CaliforniaResidencyDocuments,
  MedicalDocuments,
  RealIdDocuments,
  SocialSecurityDocuments,
  VeteransDocuments,
  YouthDocuments,
  ReducedFee,
  BulletList
} from './documents/index.js';

const Presentation = (props) => {
  let documentList = [
    <RealIdDocuments {...props} key='real-id'/>,
    <SocialSecurityDocuments socialSecurity={props.socialSecurity} key='social-security'/>,
    <CaliforniaResidencyDocuments key='ca-residency'/>,
    <VeteransDocuments veteransService={props.veteransService} key='proof-veteran-services'/>,
    <MedicalDocuments medicalHistory={props.medicalHistory} key='medical-information'/>,
    <ReducedFee reducedFee={props.reducedFee} key='reduced-fee-documents'/>,
    <YouthDocuments dateOfBirth={props.dateOfBirth} licenseIssued={props.licenseAndIdHistory.isIssued} key='youth-documents' />
  ];

  return (
    <Page
      {...props}
    >
      <div className='required-documents'>
        <h3>Here's what you need to bring to the DMV</h3>
        <p> Below is a list of what you will need to bring to a DMV office visit to complete your application.
        You will need to bring original versions of all documents listed below, as photocopies and laminated
        versions are not accepted.
        </p>

        <h4>We need original documents to confirm the following:</h4>
        <BulletList
          socialSecurity      = { props.socialSecurity }
          veteransService     = { props.veteransService }
          medicalHistory      = { props.medicalHistory }
          realID              = { props.realID }
          dateOfBirth         = { props.dateOfBirth }
          licenseIssued       = { props.licenseAndIdHistory.isIssued }
          reducedFee          = { props.reducedFee }
          IDApp               = { props.IDApp }
          DLApp               = { props.DLApp }
        />

          { documentList }
        <hr></hr>

        <p>If you have any questions, please reach out—we’re here to help!</p>
        <p>Telephone: 1-800-777-0133</p>
        <p>Hearing Impaired: TTY 1-800-368-4327</p>
        <p>Call Center business hours are: Monday, Tuesday, Thursday, Friday 8 am to 5 pm, and Wednesday, 9am to 5pm.</p>
      </div>
    </Page>
  );
};

export default Presentation;