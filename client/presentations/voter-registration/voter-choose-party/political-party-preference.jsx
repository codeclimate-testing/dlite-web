'use strict';

import React                  from 'react';
import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import OtherParty             from './other-party.jsx';

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
