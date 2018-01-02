'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';

const COLORS = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];

const HairColor = (props) => {
  return (
    <div className='hair-color'>
      <h4>What color is your hair?</h4>
        <div className='inner-bottom'>
          <RadioCollection
            {...props}
            name='hairColor'
            custom={true}
          >
            <RadioSelector
              text='Auburn'
              value='Auburn'
            />
            <RadioSelector
              text='Bald'
              value='Bald'
            />
            <RadioSelector
              text='Black'
              value='Black'
            />
            <RadioSelector
              text='Blonde'
              value='Blonde'
            />
            <RadioSelector
              text='Brown'
              value='Brown'
            />
            <RadioSelector
              text='Gray'
              value='Gray'
            />
            <RadioSelector
              text='Red'
              value='Red'
            />
            <RadioSelector
              text='White'
              value='White'
            />
            <RadioSelector
              text='Other'
              value='Other'
            />
          </RadioCollection>
        </div>
    </div>
  );
};

export default HairColor;
