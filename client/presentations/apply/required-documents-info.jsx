'use strict';

import React            from 'react';
import { Link }         from 'react-router-dom';

import HomeLink           from '../home-link.jsx';
import alicePath          from '../../helpers/alice-path';

const RequiredDocuments = (props) => {
  const ab60Checklist                   = 'https://www.dmv.ca.gov/portal/dmv/detail/online/ab60_checklist';
  const legalPresenceList               = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#BDLP';
  const caResidencyList                 = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#Residency%20Documents';
  const socialSecurityDocumentsList     = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl08';
  const veteranVerificationLink         = 'https://www.dmv.ca.gov/portal/dmv/detail/coi/veterans/veterans_driver_license';
  const realIDInformationPage           = 'https://www.dmv.ca.gov/portal/dmv/detail/realid';
  const caLicenseRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true'

  let bulletList = [];
  let documentList = [];

  if(props.realID.getRealID === 'Yes') {
    bulletList.push(<li key='real-id'>Real ID birth date, name and legal presence proof</li>);
  } else {
    bulletList.push(<li key='legal-presence'>Legal presence</li>);
  }
  if(props.socialSecurity.hasSocialSecurity === 'Yes') {
    bulletList.push(<li key='medical-information' >Proof of Social Security Number</li>);
  }
  bulletList.push(<li key='ca-residency' >California residency</li>);
  if(props.veteransService.isVeteran === 'Yes' && props.veteransService.veteransIdentifier === 'Yes') {
    bulletList.push(<li key='proof-veteran-service' >Proof of veterans service</li>);
  }
  if(props.medicalHistory.hasMedicalCondition === 'Yes') {
    bulletList.push(<li key='medical-information' >Medical Information</li>);
  }

  if(props.realID.getRealID === 'Yes'){
    documentList.push(
      <div key='real-id-documents'>
        <h4 className="real-id-documents">Real ID birth date, name and legal presence proof</h4>
        <p>
        We need to verify your date of birth and what we call your “legal presence”.
        Documents should use your true, full name that you use today or we will need
        additional documents proving your true, full name will be required.
        See our <a target="_blank" href={ realIDInformationPage }>Real ID information page</a> for
        details on acceptable date of birth and legal presence documents required to receive a Real ID compliant card.
        </p>
        <p>From that list we will need either:</p>
        <ul className='bullet-list'>
          <li>A single document that proves both your date of birth and legal presence.</li>
          <li>Or one document for your date of birth and one document for your legal presence.</li>
        </ul>
        <p>
        If you were married or divorced, adopted or have changed your name through the courts, please
        make sure to also bring <a target="_blank" href={ caLicenseRequirements }>proof of the true, full name</a>.
        </p>
      </div>
    );
  } else {
    documentList.push(
      <div key='legal-presence-documents'>
        <h4 className="legal-presence-documents">Legal presence</h4>
        <p>All applicants need to prove their date of birth. Unless you’re AB 60, you need to prove legal presence.
        Please refer to our <a target="_blank" href={ ab60Checklist }>AB 60 checklist tool</a> and
        our <a target="_blank" href={ legalPresenceList }>date of birth and legal presence list</a>.
        </p>
      </div>
    );
  }

  if(props.socialSecurity.hasSocialSecurity === 'Yes'){
    documentList.push(
      <div key='proof-of-ssn-documents'>
        <h4 className="proof-of-ssn-documents">Proof of Social Security Number</h4>
        <p>Under California law, we will need proof of your Social Security Number. Our <a target="_blank" href={ socialSecurityDocumentsList }>Social Security documents page lists accepted documents</a>.</p>
        <p>If you recently changed your name, make sure that change is reflected on the document you bring.</p>
      </div>
    );
  }

  documentList.push(
    <div key='california-residency-documents'>
      <h4 className="california-residency-documents">California residency</h4>
      <p>You will also need to bring in a document that proves that you live in California.
      Please review our <a target="_blank" href={ caResidencyList }>list of acceptable California residency documents</a>.
      </p>
    </div>
  );

  if(props.veteransService.isVeteran === 'Yes' && props.veteransService.veteransIdentifier === 'Yes'){
    documentList.push(
      <div key='proof-of-veterans-service'>
        <h4 className="proof-of-veterans-service">Proof of veterans service</h4>
        <p>To get “Veteran” on your card, you need to to bring a <a target="_blank" href={ veteranVerificationLink }> Veteran Status Verification Form </a> that your County Veteran Service Office can provide to you. We thank you for your service! </p>

      </div>
    );
  }

  if(props.medicalHistory.hasMedicalCondition === 'Yes'){
    documentList.push(
      <div key='medical-information-documents'>
        <h4 className="medical-information-documents">Medical Information</h4>
        <p>If you have a medical condition or a disability, DMV may require you to take a driving test. You may also have to provide a statement from your physician regarding your current health condition. </p>
      </div>
    );
  }

  return (
    <div>

      <div className='required-documents'>
        <h3>Here's what you need to bring to the DMV</h3>

        <p> Below is a list of what you will need to bring to a DMV office visit to complete your application.
        You will need to bring original versions of all documents listed below, as photocopies and laminated
        versions are not accepted.
        </p>

        <h4>We need original documents to confirm the following:</h4>
        <ul className='bullet-list'>
          { bulletList }
        </ul>

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

export default RequiredDocuments;
