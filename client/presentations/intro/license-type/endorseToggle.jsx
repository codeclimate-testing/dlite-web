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
      <hr />
      <h2 className='question'>Do you need any professional endorsements?</h2>
      <p>Firefighters and ambulance drivers need special endorsements to drive their vehicles.</p>
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
