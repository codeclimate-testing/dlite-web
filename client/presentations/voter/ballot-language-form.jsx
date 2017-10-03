'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['English', 'Chinese', 'Japanese', 'Spanish', 'Thai', 'Korean', 'Tagalog', 'Hindi', 'Khmer', 'Vietnamese'];

const BallotLanguageForm = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>In what language would you like to receive your official election materials?</h4>
      <p>Election materials include your election guide and ballot(s)</p>
      <form onSubmit={ props.onSubmit } className='ballot-language-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='ballotLanguage'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default BallotLanguageForm;
