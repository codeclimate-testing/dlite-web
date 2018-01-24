'use strict';

import React                from 'react';
import RadioCollection      from '../../radio-selector-collection.jsx';
import RadioSelector        from '../../radio-selector.jsx';

const Sex = (props) => {
  return (
    <div className="sex">
      <h2 className='question'>What's your sex?</h2>
        <div>
          <RadioCollection
            {...props}
            name='sex'
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
