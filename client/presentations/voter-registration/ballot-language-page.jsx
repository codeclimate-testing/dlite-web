'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import LanguageRadios       from '../language-radios.jsx'
import Page                 from '../../containers/page.jsx';
import Translator           from '../../i18n/translator-tag.jsx';
import { checkPreReg }      from '../../helpers/data/youth';

const BallotLanguagePage = (props) => {

  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-language-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'votingRegistration.chooseLanguagePage.pagePrompt'
        />
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
