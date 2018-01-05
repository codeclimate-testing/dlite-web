'use strict';

import React                  from 'react';
import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';

const PARTIES = [ "American Independent Party",
                  "Libertarian Party",
                  "Democratic Party",
                  "Green Party",
                  "Peace and Freedom Party",
                  "Republican Party",
                  "Other"
                ];

const PoliticalPartyPreference = (props) => {
  if(props.politicalPartyChoose.isSelected !== 'Yes') { return null; }

  return (
    <div className='political-party-preference'>
      <h4>Please select a party below</h4>
      <div className='inner-bottom'>
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
          <RadioSelector 
            value='Other'
            text='Other'
          />
        </RadioCollection>
      </div>
    </div>
  );
};

export default PoliticalPartyPreference;
