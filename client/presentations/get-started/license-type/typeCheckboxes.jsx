'use strict';

import React from 'react';
import CheckboxSelector from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {

  return (
    <div className='license-type-form'>
      <h2 className='question'>What do you need to drive?</h2>
      <p>Select all that apply</p>
      <div className='row'>
        <fieldset>
          <CheckboxCollection
            {...props}
            name   = 'type'
            array  = { props.licenseType.type }
            onBlur = { props.onBlurValidate }
            errorMessage={ props.validations.licenseType() }
          >
            <CheckboxSelector
              value = 'car'
              text  = 'Car'
            />
            <CheckboxSelector
              value = 'cycle'
              text  = 'Motorcycle or scooter'
            />
            <CheckboxSelector
              value = 'trailer'
              text  = '5th wheel or livestock trailer'
            />
            <CheckboxSelector
              value = 'long'
              text  = 'Housecar over 45 feet or trailer over 25 feet'
            />
            <CheckboxSelector
              value = 'unsure'
              text  = "I'm not sure"
            />
          </CheckboxCollection>
        </fieldset>
      </div>
    </div>
  )
};

export default Form;
