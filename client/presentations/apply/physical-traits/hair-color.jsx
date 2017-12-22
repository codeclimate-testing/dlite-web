'use strict';

import React                  from 'react';
import SelectorCollection     from '../../selector-collection.jsx';

const COLORS = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];

const HairColor = (props) => {
  return (
    <div className='hair-color'>
      <h4>What color is your hair?</h4>
        <div className='inner-bottom'>
          <SelectorCollection
            name='hairColor'
            values={COLORS}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
    </div>
  );
};

export default HairColor;
