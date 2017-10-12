'use strict';

import React      from 'react';
import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['Yes', 'I do not wish to choose a political party'];

const PoliticalPartyChoose = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Would you like to choose a political party preference?</h4>
      <p>In order to vote for a presidential candidate in a primary election, you
      may need to be registered with that political party.</p>

        <form onSubmit={ props.onSubmit } className='political-party-choose'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='politicalPartyChoose'
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

export default PoliticalPartyChoose;
