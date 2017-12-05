'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import Page                    from '../page.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';

const VALUES = ['English', 'Chinese', 'Japanese', 'Spanish', 'Thai', 'Korean', 'Tagalog', 'Hindi', 'Khmer', 'Vietnamese'];
let pageTitle = 'DMV: License application - Voting registration'

const BallotLanguageForm = (props) => {

  let documentHeader = [];

  if ((props.dateOfBirth.age === 16) || (props.dateOfBirth.age === 17)) {
    documentHeader.push(
      'Voting pre-registration'
    );
  }
  else {
    documentHeader.push(
      'Voting registration'
    );
  }
  return (
    <Page
      pageTitle={ pageTitle }
      sectionNumber='3'
      sectionName={ documentHeader }
      {...props} 
    >
      <div>
        <h4>Choose a language for your election materials.</h4>
        <form onSubmit={ props.onSubmit } className='ballot-language-form'>
          <div className='inner-bottom'>
            <SelectorCollection
              name='ballotLanguage'
              values={VALUES}
              onChange={ props.onChange }
              selectedValue={ props.selectedValue }
            />
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default BallotLanguageForm;
