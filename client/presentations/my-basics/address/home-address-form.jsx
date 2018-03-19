'use strict';

import React from 'react';

import StateSelector      from '../../state-selector.jsx';
import TextInput          from '../../text-input.jsx';
import AddressTemplate    from '../../address-template.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <div className='home-address-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myBasics.addressesPage.prompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'myBasics.addressesPage.explanation'
      />
      <div className='addresses-section'>
        <fieldset>
          <AddressTemplate
            {...props}
            type  = 'home'
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
