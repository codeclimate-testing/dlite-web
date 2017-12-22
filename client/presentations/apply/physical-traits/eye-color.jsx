'use strict';

import React              from 'react';
import SelectorCollection from '../../selector-collection.jsx';

const COLORS = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];

const EyeColor = (props) => {
  return (
    <div className='eye-color'>
      <h4>What color are your eyes?</h4>
        <div className='inner-bottom'>
          <SelectorCollection
            name='eyeColor'
            values={COLORS}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
    </div>
  );
};

export default EyeColor;
