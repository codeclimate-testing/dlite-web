'use strict';

import React from 'react';

import StateSelector      from '../../state-selector.jsx';
import TextInput          from '../../text-input.jsx';
import AddressTemplate    from '../../address-template.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <div className='home-address-form'>
      <Translation tag='h2' className='question'>
        {translations[locale].myBasics.addressesPage.prompt}
      </Translation>
      <Translation tag='p'>
        {translations[locale].myBasics.addressesPage.explanation}
      </Translation>
      <div className='addresses-section'>
        <fieldset>
          <AddressTemplate
            {...props}
            type= 'home'
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
