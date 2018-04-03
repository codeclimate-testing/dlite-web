'use strict';
import React                from 'react';
import { Link }             from 'react-router-dom';
import Page                 from '../../containers/page.jsx';
import AppointmentAccordion from './appointment-accordion.jsx';
import { buildConfCode }    from '../../helpers/data/application';
import Translator           from '../../i18n/translator-tag.jsx';


const AppointmentPreparation = (props) => {
  const documentsLink = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info';
  const appointmentLink = "https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment";
  const confCode = buildConfCode(props);
  return (
    <Page
      {...props}
    >
      <div className='appointment-preparation'>
        <Translator
          tag='p'
          translationPath='confirmationPage.subHeader'
        />
        <Translator
          tag='h2'
          className='translation-missing'
          translationPath='You now need to go to the DMV!'
        />
        <div className='centered-content'>
          <h2>{confCode}</h2>

          <Translator
            tag='h4'
            className='translation-missing'
            translationPath='This is your your confirmation code:'
          />

          <Translator
            tag='p'
            className='translation-missing'
            translationPath='Show it to a DMV employee. We will also email this code to you.'
          />

          <img src='/images/icons/documents/documents.svg' alt='documents' />

          <h4 className='translation-missing'><a target="_blank" href={documentsLink}>Bring your required documents.</a></h4>

          <Translator
            tag='p'
            className='translation-missing'
            translationPath='For details about what you need to do to complete your application, visit the DMV website.'
          />

          <img src='/images/icons/appointments/appointments.svg' alt='appointments' />
          <h4 className='translation-missing'><a target="_blank" href={appointmentLink}>Make an appointment to save time</a></h4>
        </div>

        <AppointmentAccordion />

      </div>
    </Page>
  );
};

export default AppointmentPreparation;
