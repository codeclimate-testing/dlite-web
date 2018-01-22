'use strict';

import React                  from 'react';
import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import TextInput              from '../../text-input.jsx';
import {
  ErrorIcon,
  ErrorLabel,
  errorClass
} from '../../validations.jsx';

const PARTIES = [ "American Independent Party",
                  "Libertarian Party",
                  "Democratic Party",
                  "Green Party",
                  "Peace and Freedom Party",
                  "Republican Party",
                  "Other"
                ];

const OtherParty = (props) => {
  if (props.politicalPartyChoose.politicalPartyChoose !== 'Other') { 
    return (
      <RadioSelector
        {...props}
        value='Other'
        text='Other'
      />
    )
  }
  
  let errorMessage = props.validations.otherParty();
  let error = errorClass(errorMessage);

  return (
    <div className='radio-input'>
      <ErrorIcon
        errorClass= { error }
      />
      <RadioSelector
        {...props}
        value=''
        text=''
        selected = {true}
      >
        <TextInput 
          {...props}
          id            = 'otherParty'
          name          = 'otherParty'
          value         = { props.politicalPartyChoose.otherParty }
          error         = { error} 
          placeholder   = 'Please enter your selection'
        />
      </RadioSelector>
      <ErrorLabel
        errorMessage  = { errorMessage }
        errorClass    = { error }
      />
    </div>
  );
};

const PoliticalPartyPreference = (props) => {
  if(props.politicalPartyChoose.isSelected !== 'Yes') { return null; }

  return (
    <div className='political-party-preference'>
      <hr/>
      <h2 className='question'>Please select a party below</h2>

      <RadioCollection 
        {...props}
        name='politicalPartyChoose'
      >
        <RadioSelector 
          value='American Independent Party'
          text='American Independent Party'
        />
        <RadioSelector 
          value='Libertarian Party'
          text='Libertarian Party'
        />
        <RadioSelector 
          value='Democratic Party'
          text='Democratic Party'
        />
        <RadioSelector 
          value='Green Party'
          text='Green Party'
        />
        <RadioSelector 
          value='Peace and Freedom Party'
          text='Peace and Freedom Party'
        />
        <RadioSelector 
          value='Republican Party'
          text='Republican Party'
        />
        <OtherParty
          {...props}
          key='otherParty'
        />
      </RadioCollection>
    </div>
  );
};

export default PoliticalPartyPreference;
