'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import RadioSelector    from '../../radio-selector.jsx';

const Form = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='endorsement-toggle'>
      <h4>Do you need any professional endorsements?</h4>
      <h5>Firefighters and ambulance drivers need special endorsements to drive their vehicles.</h5>
      <div className='row inner-bottom'>
        <RadioCollection
          {...props}
          name='needEndorsement'
          text={values}
        >
          <RadioSelector
            value = 'Yes'
          />
          <RadioSelector
            value= 'No'
          />
        </RadioCollection>
      </div>
    </div>
  )
};

export default Form;