'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import LanguageRadios       from '../language-radios.jsx'
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';
import { checkPreReg }      from '../../helpers/data/youth';
import { convertToHtml }    from '../../i18n/convert-to-html.jsx';

const BallotLanguagePage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-language-form'>
        {convertToHtml('h2', translations[locale].votingRegistration.chooseLanguagePage.pagePrompt, 'question')}
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
