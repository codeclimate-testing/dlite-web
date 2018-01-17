'use strict';

import React            from 'react';
import RadioSelector    from '../../radio-selector.jsx';
import RadioCollection  from '../../radio-selector-collection.jsx';

const values = {
  Yes : 'Yes',
  Skip: 'I do not wish to choose a political party'
};

const PoliticalPartyChoose = (props) => {

  return (

    <div>
      <div className='choose-political-party'>
        <h2 className='question'>Would you like to choose a political party preference?</h2>
        <p>In order to vote for a presidential candidate in a primary election, you
        may need to be registered with that political party.</p>
        <div>
          <RadioCollection  
            {...props}
            name='isSelected'
            text={values}
          >
            <RadioSelector 
              value='Yes'
            />
            <RadioSelector 
              value='Skip'
            />
          </RadioCollection>
        </div>
    </div>
  </div>

  );
};

export default PoliticalPartyChoose;
