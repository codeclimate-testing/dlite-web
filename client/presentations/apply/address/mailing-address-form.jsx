'use strict';

import React            from 'react';

import AddressTemplate  from '../../address-template.jsx';

const Form = (props) => {
  if(props.isSameAsHome !== 'No') { return null; }

  return (
    <div className='mailing-address-form'>
      <hr/>
      <h2 className='question'>Where do you receive mail?</h2>
      <p>For example: 1234 H Street, Apt. 200, Los Angeles, CA. 90017</p>
      <div className='addresses-section'>
          <AddressTemplate
            {...props}
            type = 'mailing'
          />
      </div>
    </div>
  )
};

export default Form;
