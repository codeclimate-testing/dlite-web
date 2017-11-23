'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';

const VALUES = ['English', 'Chinese', 'Japanese', 'Spanish', 'Thai', 'Korean', 'Tagalog', 'Hindi', 'Khmer', 'Vietnamese'];

const BallotLanguageForm = (props) => {
  document.title = props.pageTitle;
  return (
    <div>
      <HomeLink />
      <h3>3 &raquo; Voting registration</h3>
      <hr></hr>

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
  );
};

export default BallotLanguageForm;
