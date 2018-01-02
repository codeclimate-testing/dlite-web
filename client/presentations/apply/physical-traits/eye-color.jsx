'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';

const COLORS = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];

const EyeColor = (props) => {
  return (
    <div className='eye-color'>
      <h4>What color are your eyes?</h4>
        <div className='inner-bottom'>
          <RadioCollection
            {...props}
            name='eyeColor'
            custom={true}
          >
            <RadioSelector
              text='Blue'
              value='Blue'
            />
            <RadioSelector
              text='Gray'
              value='Gray'
            />
            <RadioSelector
              text='Green'
              value='Green'
            />
            <RadioSelector
              text='Hazel'
              value='Hazel'
            />
            <RadioSelector
              text='Brown'
              value='Brown'
            />
          </RadioCollection>
        </div>
    </div>
  );
};

export default EyeColor;
