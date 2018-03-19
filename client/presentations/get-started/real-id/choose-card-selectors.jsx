'use strict';

import React from 'react';

import RadioCollection          from '../../radio-selector-collection.jsx';
import radioIdDlGroup           from '../../radio-id-dl-group.jsx';
import {
  showDesignation,
  designatedValue
}      from '../../../helpers/data/real-id';

const Form = (props) => {
  let locale = props.locale;
  if (!showDesignation(props)) { return null; }

  return (
    <div className='real-id-form'>
      <hr/>
      <h2 className='question translation-missing'>Which card would you like to fly with?</h2>
      <p className='translation-missing'>
        Either your license or your ID card can be made federally
        compliant to fly within the United States, but not both
      </p>

      <fieldset role='group' aria-label='Real ID card choice'>
        <RadioCollection
          {...props}
          name          = 'realIdDesignation'
          errorMessage  = { props.validations.designation() }
          selectedValue = { designatedValue(props) }
        >
          { radioIdDlGroup(locale) }
        </RadioCollection>
      </fieldset>

    </div>
  );
};

export default Form;
