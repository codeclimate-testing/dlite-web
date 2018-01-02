'use strict';

import React            from 'react';
import RadioSelector    from '../../radio-selector.jsx';
import RadioCollection  from '../../radio-selector-collection.jsx';

const Form = (props) => {

  return (
    <div className='endorsement-toggle'>
      <h4>Do you need any professional endorsements?</h4>
      <h5>Firefighters and ambulance drivers need special endorsements to drive their vehicles.</h5>
      <div className='row inner-bottom'>
        <RadioCollection 
          {...props}
          name='needEndorsement'
        >
          <RadioSelector
            value =         'Yes'
            text=           'Yes'
          />
          <RadioSelector
            value =         'No'
            text=           'No'
          />
        </RadioCollection>
      </div>
    </div>
  )
};

export default Form;