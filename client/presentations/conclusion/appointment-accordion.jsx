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
      title='newExtracted.confirmation.title'
    >
      <div>
        <Translator
          tag='p'
          translationPath='newExtracted.confirmation.information'
        />
        <Translator
          tag='p'
          translationPath='votingRegistration.confirmation.explanation'
        />
        <Translator
          tag='h4'
          translationPath='newExtracted.confirmation.checkStatus'
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
