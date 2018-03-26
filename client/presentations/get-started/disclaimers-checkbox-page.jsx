'use strict'

import React        from 'react';

import CheckboxSelector   from '../checkbox-selector.jsx';
import CheckboxCollection from '../checkbox-selector-collection.jsx';
import translations       from '../../i18n';
import Translation        from '../../i18n/translate-tag.jsx';
import { hasValue }       from '../../helpers/data/validations.js';

const DisclaimersCheckbox = (props) => {
  let locale = props.locale
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
