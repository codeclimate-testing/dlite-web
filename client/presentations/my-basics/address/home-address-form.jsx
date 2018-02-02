'use strict';

import React from 'react';

import StateSelector    from '../../state-selector.jsx';
import TextInput        from '../../text-input.jsx';
import AddressTemplate  from '../../address-template.jsx';
import translations     from '../../../i18n'

const Form = (props) => {
  return (
    <div className='home-address-form'>
      <h2 className='question'>{translations.myBasics.addressesPage.prompt}</h2>
      <p>{translations.myBasics.addressesPage.explanation}</p>
      <div className='addresses-section'>
        <AddressTemplate
          {...props}
          type= 'home'
        />
      </div>
    </div>
  );
};

export default Form;
