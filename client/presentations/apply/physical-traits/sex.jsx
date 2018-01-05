'use strict';

import React                from 'react';
import RadioCollection      from '../../radio-selector-collection.jsx';
import RadioSelector        from '../../radio-selector.jsx';

const Sex = (props) => {
  let values = {
    Male: 'Male',
    Female: 'Female'
  };

  return (
    <div className="sex">
      <h4>What's your sex?</h4>
        <div className='inner-bottom'>
          <RadioCollection 
            {...props}
            name='sex'
            text={values}
          >
            <RadioSelector
              value='Female'
            />
            <RadioSelector
              value='Male'
            />
          </RadioCollection>
        </div>
    </div>
  );
};

export default Sex;
