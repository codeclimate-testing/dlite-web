'use strict';

import React from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';
import translations           from '../../../i18n';

const VoterIntroPrereg = (props) => {
  return (
    <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='voter-intro-info'>
          <h5><img src='/images/stop.png' alt='Stop' /> {translations.votingRegistration.preRegIntroductionPage.citizenOnlyDisclaimer} </h5>
          <h2 className='question' key='header'>{translations.votingRegistration.preRegIntroductionPage.pagePrompt}</h2>
          <p>{translations.votingRegistration.preRegIntroductionPage.explanation}</p>

          <hr />

          <p>{translations.votingRegistration.introductionPage.timeItWillTake}</p>

          <NavigationButtons {...props} />
        </div>
      </form>
    </Page>
  );
};


export default VoterIntroPrereg;
