'use strict';

import React              from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {
  if(props.licenseType.needEndorsement !== 'Yes') { return null; }

  const text = {
    firefighter: 'Firefighter',
    ambulance: 'Ambulance'
  };

  return (
    <div className='endorsement-form'>
      <h4>Which?</h4>
      <h5>Select all that apply</h5>
      <div className='row inner-bottom'>
        <CheckboxCollection 
          {...props}
          name  = 'endorsement'
          array = {props.licenseType}
          text  = {text}
        >
          <CheckboxSelector 
            value     = 'firefighter'
          />
          <CheckboxSelector 
            value     = 'ambulance'
          />
        </CheckboxCollection>
        <div className='unit spacer' />
      </div>
    </div>
  )
};

export default Form;