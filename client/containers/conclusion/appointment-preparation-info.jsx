'use strict';

import React            from 'react';
import { Link }         from 'react-router-dom';

import HomeLink         from '../../presentations/home-link.jsx';
import alicePath        from '../../helpers/alice-path';

const AppointmentPreparation = (props) => {
  const documentsLink = '/appointment-preparation/documents';
  const appointmentLink = "https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment";

  return (
    <div>
      <HomeLink />

      <div className='appointment-preparation'>
        <h2 className='question'>Your form has been submitted!</h2>
        <p>You will need to go to your local DMV office to complete your application.</p>
        <p>Your application will expire in <b>1 year</b>.</p>
        <hr/>

        <h4>Next:</h4>
        <ul className='bullet-list'>
            <li>You will receive a <b>confirmation code</b> via text or email for you to present to the counter agent at your DMV visit.</li>
            <li>Make <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment">an appointment</a> to visit your local DMV office.
            Most offices require appointments for new driver licenses.</li>
            <li>Prepare for your visit by collecting the <Link className="required-documents-link" to={alicePath(documentsLink)}>required documents.</Link>
            We’ve created a custom list for you, based on the information you provided in your application.
            You will also receive a link to that page in your electronice receipt.</li>
            <li>Should you require one, make <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment">an appointment</a> to take your driving skills test.
            These are administered by appointment, only.</li>
            <li>Study for your written exam, using <a target="_blank" href="https://www.dmv.ca.gov/web/eng_pdf/dl600.pdf">California’s Driver Handbook.</a></li>
        </ul>

        <br></br>

        <h4>At your DMV office visit you will be asked to:</h4>
        <ul className='bullet-list'>
          <li>Provide fingerprints</li>
          <li>Have your picture taken</li>
          <li>Take vision test</li>
          <li>Present <b>original</b> required documents for verification</li>
          <li>Sign your application</li>
        </ul>

        <hr></hr>

        <p>To avoid long waits and lines, make an appointment at your local DMV now.</p>

        <div className='shadow-container unit'>
          <a href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment" className='button'>Make Appointment</a>
        </div>

      </div>
    </div>
  );
};

export default AppointmentPreparation;
