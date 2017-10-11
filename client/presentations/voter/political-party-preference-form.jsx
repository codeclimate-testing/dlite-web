'use strict';

import React                  from 'react';

import HomeLink               from '../home-link.jsx';
import ContinueButton         from '../continue-button.jsx';
import SelectorCollection     from '../selector-collection.jsx';

const PARTIES = [ "American Independent Party",
                  "Libertarian Party",
                  "Democratic Party",
                  "Green Party",
                  "Peace and Freedom Party",
                  "Republican Party",
                  "Other"
                ];

const Form = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Please select a party below</h4>
      <form onSubmit={ props.onSubmit } className='political-party-preference-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='politicalParty'
            values={PARTIES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default Form;
