'use strict';

import React            from 'react';
import RadioSelector    from '../../radio-selector.jsx';

const Form = (props) => {

  return (
    <div className='endorsement-toggle'>
      <h4>Do you need any professional endorsements?</h4>
      <h5>Firefighters and ambulance drivers need special endorsements to drive their vehicles.</h5>
      <div className='row inner-bottom'>
        <RadioSelector
          name =          'needEndorsement'
          value =         'Yes'
          text=           'Yes'
          onChange =      { props.onChange }
          selected =      { props.licenseType.needEndorsement === 'Yes' }
        />
        <RadioSelector
          name =          'needEndorsement'
          value =         'No'
          text=           'No'
          onChange =      { props.onChange }
          selected =      { props.licenseType.needEndorsement === 'No' }
        />
      </div>
    </div>
  )
};

export default Form;