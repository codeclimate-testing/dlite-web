'use strict';

import React              from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {
  const text = {
    car       : 'Car',
    cycle     : 'Motorcycle or scooter',
    trailer   : '5th wheel or livestock trailer',
    long      : 'Housecar over 45 feet or trailer over 25 feet',
    unsure    : "I'm not sure"
  };

  return (
    <div className='license-type-form'>
      <h2 className='question'>What do you need to drive?</h2>
      <p>Select all that apply</p>
      <div className='row inner-bottom'>
        <CheckboxCollection
          {...props}
          text  = {text}
          name  = 'type'
          array = {props.licenseType}
        >
          <CheckboxSelector
            value = 'car'
          />
          <CheckboxSelector
            value = 'cycle'
          />
          <CheckboxSelector
            value = 'trailer'
          />
          <CheckboxSelector
            value = 'long'
          />
          <CheckboxSelector
            value = 'unsure'
          />
        </CheckboxCollection>
      </div>
    </div>
  )
};

export default Form;
