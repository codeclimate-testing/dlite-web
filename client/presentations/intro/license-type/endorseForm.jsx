'use strict';

import React            from 'react';
import CheckboxSelector from '../../checkbox-selector.jsx';
import * as dataPresent from '../../../helpers/data-present';


const Form = (props) => {
  if(props.licenseType.needEndorsement !== 'Yes') { return null; }
  return (
    <div className='endorsement-form'>
      <h4>Which?</h4>
      <h5>Select all that apply</h5>
      <div className='row inner-bottom'>
        <CheckboxSelector 
          {...props}
          value =     'firefighter'
          selected =  { dataPresent.includes(props.licenseType.endorsement, 'firefighter') }
          text =      'Firefighter'
        />
        <CheckboxSelector 
          {...props}
          value =     'ambulance'
          selected =  { dataPresent.includes(props.licenseType.endorsement, 'ambulance') }
          text =      'Ambulance'
        />
        <div className='unit spacer' />
      </div>
    </div>
  )
};

export default Form;