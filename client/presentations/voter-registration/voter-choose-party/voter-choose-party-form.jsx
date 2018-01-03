'use strict';

import React from 'react';
import SelectorCollection from '../../selector-collection.jsx';

const PoliticalPartyChoose = (props) => {

  return (

    <div>
      <div className='choose-political-party'>
        <h4>Would you like to choose a political party preference?</h4>
        <p>In order to vote for a presidential candidate in a primary election, you
        may need to be registered with that political party.</p>
        <div className='inner-bottom'>
          <SelectorCollection
            name='isSelected'
            values={['Yes', 'I do not wish to choose a political party']}
            onChange={props.onChange}
            selectedValue={props.selectedValue}
          />
        </div>
    </div>
  </div>

  );
};

export default PoliticalPartyChoose;
