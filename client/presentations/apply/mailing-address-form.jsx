'use strict';

import React from 'react';

import HomeLink         from '../home-link.jsx';
import StateSelector    from '../state-selector.jsx';
import TextInput        from '../text-input.jsx';
import AddressTemplate  from '../address-template.jsx';

const Form = (props) => {
  return (
    <div className='mailing-address-form'>

      <h4>Where do you receive mail?</h4>
      <h5>For example: 1234 H Street, Apt. 200, Los Angeles, CA. 90017</h5>
      <div className='addresses-section'>
          <AddressTemplate
            type='mailing'
            address={ props.mailingAddress }
            onChange={ props.onChange }
          />
      </div>
    </div>
  )
};

export default Form;
