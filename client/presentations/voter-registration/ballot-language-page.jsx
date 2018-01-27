'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import LanguageRadios       from '../language-radios.jsx'
import Page                 from '../../containers/page.jsx';

const BallotLanguagePage = (props) => {
  console.log(props.selectedValue)
  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-language-form'>
        <h2 className='question'>Choose a language for your election materials.</h2>
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
