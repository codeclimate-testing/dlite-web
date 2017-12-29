'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-collection.jsx';

const Form = (props) => {

  return (
    <div className='endorsement-toggle'>
      <h4>Do you need any professional endorsements?</h4>
      <h5>Firefighters and ambulance drivers need special endorsements to drive their vehicles.</h5>
      <div className='row inner-bottom'>
        <RadioCollection
          name =          'needEndorsement'
          values =        {['Yes', 'No']}
          onChange =      { props.onChange }
          selectedValue = { props.licenseType.needEndorsement }
        />
      </div>
    </div>
  )
};

export default Form;