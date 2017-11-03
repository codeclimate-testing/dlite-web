'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['Female', 'Male'];

const Sex = (props) => {
  return (
    <div className="sex">
      <h4>What's your sex?</h4>
        <div className='inner-bottom'>
          <SelectorCollection
            name='sex'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
    </div>
  );
};

export default Sex;
