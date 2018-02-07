'use strict';

import React from 'react';

import StateSelector      from '../../state-selector.jsx';
import TextInput          from '../../text-input.jsx';
import AddressTemplate    from '../../address-template.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {
  return (
    <div className='home-address-form'>
        {convertToHtml('h2', translations.myBasics.addressesPage.prompt, 'question')}
        {convertToHtml('p', translations.myBasics.addressesPage.explanation)}
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
