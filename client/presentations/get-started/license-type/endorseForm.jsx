'use strict';

import React              from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='endorsement-form'>
      <hr/>
      <h2 className='question'>Which?</h2>
      <p>Select all that apply</p>
      <div className='row'>
        <CheckboxCollection
          {...props}
          name  = 'endorsement'
          array = {props.licenseType.endorsement }
          onBlur = { props.onBlurValidate }
          errorMessage={ props.validations.endorsement() }
        >
          <CheckboxSelector
            value     = 'firefighter'
            text      = 'Firefighter'
          />
          <CheckboxSelector
            value     = 'ambulance'
            text      = 'Ambulance'
          />
        </CheckboxCollection>
      </div>
    </div>
  );
};

export default Form;
