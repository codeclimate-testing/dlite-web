'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import LanguageRadios       from '../language-radios.jsx'
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';

const BallotLanguagePage = (props) => {
  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-language-form'>
        <h2 className='question'>{translations.votingRegistration.chooseLanguagePage.pagePrompt}</h2>
        <LanguageRadios
          {...props}
          name         = 'ballotLanguage'
          errorMessage = {props.validations.ballotLanguage()}
        />

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default BallotLanguagePage;
