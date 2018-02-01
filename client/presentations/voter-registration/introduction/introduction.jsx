'use strict';

import React from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';
import translations           from '../../../i18n';

const VoterIntro = (props) => {
  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='voter-intro-info'>
          <h5><img src='/images/stop.png' alt='Stop' /> {translations.votingRegistration.introductionPage.citizenOnlyDisclaimer} </h5>
          <h2 className='question'>{translations.votingRegistration.introductionPage.pagePrompt}</h2>
          <p>{translations.votingRegistration.introductionPage.explanation}</p>

          <hr />

          <p>{translations.votingRegistration.introductionPage.timeItWillTake}</p>

          <NavigationButtons {...props} />
        </div>
      </form>
    </Page>
  );
};


export default VoterIntro;
