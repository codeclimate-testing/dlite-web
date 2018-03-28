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
          className='translation-missing'
          translationPath='If you do not receive a voter notification card within four weeks after your visit to the DMV, contact your county elections official.'
        />
        <Translator
          tag='h4'
          className='translation-missing'
          translationPath='Check for status'
        />
        <p className='translation-missing'><a target="_blank" href={voterStatusLink}>voterstatus.sos.ca.gov</a></p>

        <Translator
          tag='h4'
          className='translation-missing'
          translationPath='If you need to register to vote before your DMV visit:'
        />
        <p className='translation-missing'>You can register online at <a target="_blank" href={registerToVoteLink}>RegisterToVote.ca.gov</a>.</p>
      </div>
    </Accordion>
  )
};

export default Form;