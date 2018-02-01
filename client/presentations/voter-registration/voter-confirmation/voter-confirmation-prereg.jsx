'use strict';

import React            from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';
import translations           from '../../../i18n';

const PreRegVoterRegComplete = (props) => {
  return (
  <Page
    {...props}
    sectionKey='voterPreRegistration'
  >
    <form onSubmit={props.onSubmit}>
      <div className='voter-reg-complete'>
        <h4>{translations.votingRegistration.confirmation.pagePrompt}</h4>

        <p>{translations.votingRegistration.confirmation.explanation}</p>

       <NavigationButtons { ...props } />
      </div>
    </form>
  </Page>
  );
};

export default PreRegVoterRegComplete;
