'use strict';
import React              from 'react';
import { Link }           from 'react-router-dom';
import Page               from '../../containers/page.jsx';
import { iddlPath }       from '../../helpers/alice-path';
import { buildConfCode }  from '../../helpers/data/application';

const AppointmentPreparation = (props) => {
  const documentsLink = '/appointment-preparation/documents';
  const appointmentLink = "https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment";
  const confCode = buildConfCode(props);
  return (
    <Page
      {...props}
    >
      <div className='appointment-preparation'>
        <h2 className='question'>Your form has been submitted!</h2>
        <p>You will need to go to your local DMV office to complete your application.</p>
        <h4>Here's your confirmation code:</h4>
        <h4>{confCode}</h4>
        <p>Your application will expire in <b>1 year</b>.</p>
        <hr/>

        <h4>Next:</h4>
        <ul className='bullet-list'>
            <li>Make <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment">an appointment</a> to visit your local DMV office.
            Most offices require appointments for new driver licenses.</li>
            <li>Prepare for your visit by collecting the <Link className="required-documents-link" to={iddlPath(documentsLink)}>required documents.</Link>
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

        <div className='unit'>
          <div className='shadow-container'>
            <a href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment" className='button'>Make Appointment</a>
          </div>
        </div>

      </div>
    </Page>
  );
};

export default AppointmentPreparation;
