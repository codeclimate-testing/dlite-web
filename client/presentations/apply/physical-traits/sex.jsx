'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';

const Sex = (props) => {
  return (
    <div className="sex">
      <h4>What's your sex?</h4>
        <div className='inner-bottom'>
          <RadioCollection
            {...props}
            name='sex'
          >
            <RadioSelector
              text='Female'
              value='Female'
            />
            <RadioSelector
              text='Male'
              value='Male'
            />
          </RadioCollection>
        </div>
    </div>
  );
};

export default Sex;
