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


  if(TST_ENV){
    let filePath = 'file:///C:\index.mht';
    return (
      <div className='appointment-preparation'>
        <Translator
          tag='p'
          translationPath='confirmationPage.subHeader'
        />
        <Translator
          tag='h2'
          translationPath='newExtracted.appointmentPrep.goToDMV'
        />
        <div className='centered-content'>
          <h2>{confCode}</h2>

          <Translator
            tag='h4'
            translationPath='newExtracted.appointmentPrep.confirmationCode'
          />
          <br />
          <a href={filePath}>Finish Application</a>
        </div>
      </div>
    );
  }

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
          translationPath='newExtracted.appointmentPrep.goToDMV'
        />
        <div className='centered-content'>
          <h2>{confCode}</h2>

          <Translator
            tag='h4'
            translationPath='newExtracted.appointmentPrep.confirmationCode'
          />

          <Translator
            tag='p'
            translationPath='newExtracted.appointmentPrep.show'
          />

          <img src='/images/icons/documents/documents.svg' alt='documents' />

          <Translator
            tag='h4'
            translationPath='newExtracted.appointmentPrep.documentLink'
          />

          <Translator
            tag='p'
            translationPath='newExtracted.appointmentPrep.details'
          />

          <img src='/images/icons/appointments/appointments.svg' alt='appointments' />
          <Translator
            tag='h4'
            translationPath='newExtracted.appointmentPrep.appointmentLink'
          />
        </div>

        <AppointmentAccordion />

      </div>
    </Page>
  );
};

export default AppointmentPreparation;
