'use strict';

import React from 'react';
import Accordion            from '../../containers/accordion.jsx';
import Translator           from '../../i18n/translator-tag.jsx';

const voterStatusLink       = 'https://voterstatus.sos.ca.gov/';
const registerToVoteLink    = 'https://registertovote.ca.gov/';

const Form = (props) => {
    return (
    <Accordion
      id='appointments-prep-info'
      className='translation-missing'
      title='What happens to my voter registration information?'
    >
      <div>
        <Translator
          tag='p'
          className='translation-missing'
          translationPath='The voter registration will be processed when you finish your application at the DMV.'
        />
        <Translator
          tag='p'
          translationPath='votingRegistration.confirmation.explanation'
        />
        <Translator
          tag='h4'
          className='translation-missing'
          translationPath='Check for status'
        />

        <Translator
          tag='h4'
          translationPath='confirmationPage.registerSooner'
        />
      </div>
    </Accordion>
  )
};

export default Form;
