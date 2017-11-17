'use strict';

import React            from 'react';
import { Link }         from 'react-router-dom';

import HomeLink         from './home-link.jsx';
import ContinueButton   from './continue-button.jsx';
import alicePath        from './../helpers/alice-path';

const RequiredDocuments = (props) => {
  const documentsLink = '/appointment-preparation/documents';
  const appointmentLink = "https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment";

  return (
    <div>
      <HomeLink />

      <div className='required-documents'>
        <h3>Here's what you need to bring to the DMV</h3>

        <p> Below is a list of what you will need to bring to a DMV office visit to complete your application.
        You will need to bring original versions of all documents listed below, as photocopies and laminated
        versions are not accepted.
        </p>

        <h4>We need original documents to confirm the following:</h4>
        <ul className='bullet-list'>
          <li>Legal presence</li>
          <li>California residency</li>
        </ul>

        <br></br>

        <h4 className="legal-presence-documents">Legal presence</h4>
        <p>All applicants need to prove their date of birth. Unless you’re AB 60, you need to prove legal presence.
        Please refer to our <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/detail/online/ab60_checklist">AB 60 checklist tool</a> and
        our <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#BDLP">date of birth and legal presence list</a>.
        </p>

        <h4 className="california-residency-documents">California residency</h4>
        <p>You will also need to bring in a document that proves that you live in California.
        Please review our <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#Residency%20Documents">list of acceptable California residency documents</a>.
        </p>

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
