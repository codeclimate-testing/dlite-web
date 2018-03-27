'use strict'

import React        from 'react';

import CheckboxSelector   from '../checkbox-selector.jsx';
import CheckboxCollection from '../checkbox-selector-collection.jsx';
import { hasValue }       from '../../helpers/data/validations.js';

const DisclaimersCheckbox = (props) => {
  const isChecked = hasValue(props.disclaimers.type);

  return (
    <div className='disclaimers-checkbox'>
      <div className='row'>
        <fieldset role='group' aria-label='Disclaimer selection'>
          <CheckboxSelector
            {...props}
            name='type'
            selected= {isChecked}
            array={props.disclaimers.type}
            className = 'disclaimer'
            onBlur={props.onBlurValidate}
            errorMessage={props.validations.disclaimersType()}
            value= 'agree'
            text= 'I agree to the terms.'
          />
        </fieldset>
      </div>
    </div>
  );
};

export default DisclaimersCheckbox;
