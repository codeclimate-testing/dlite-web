'use strict';

import React      from 'react';
import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['Yes', 'No, I do not want to choose a political party'];

const PoliticalPartyChoose = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Would you like to choose a political party preference?</h4>
      <p>You must be registered with a party to vote in its primary elections.</p>

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
