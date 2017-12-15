'use strict';

import React                  from 'react';
import SelectorCollection     from '../selector-collection.jsx';

const PARTIES = [ "American Independent Party",
                  "Libertarian Party",
                  "Democratic Party",
                  "Green Party",
                  "Peace and Freedom Party",
                  "Republican Party",
                  "Other"
                ];

const PoliticalPartyPreference = (props) => {
  return (
    <div className='political-party-preference'>
      <h4>Please select a party below</h4>
      <div className='inner-bottom'>
        <SelectorCollection
          name='politicalPartyChoose'
          values={PARTIES}
          onChange={props.onChange}
          selectedValue={props.selectedValue}
        />
      </div>
    </div>
  );
};

export default PoliticalPartyPreference;
