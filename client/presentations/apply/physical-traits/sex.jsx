'use strict';

import React from 'react';
import SelectorCollection      from '../../selector-collection.jsx';

const Sex = (props) => {
  return (
    <div className="sex">
      <h4>What's your sex?</h4>
        <div className='inner-bottom'>
          <SelectorCollection
            name='sex'
            values={['Female', 'Male']}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
    </div>
  );
};

export default Sex;
