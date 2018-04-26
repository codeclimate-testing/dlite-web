'use strict';

import React              from 'react';
import AddressTemplate    from '../../address-template.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';
import { notSameAsHome }  from '../../../helpers/data/address';

const Form = (props) => {
  if(!notSameAsHome(props)) { return null; }

  return (
    <div className='mailing-address-form'>
      <hr />
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myBasics.addressesPage.mailingAddressPrompt'
        tabIndex        = '0'
      />
      <Translator
        tag             = 'p'
        translationPath = 'myBasics.addressesPage.explanation'
      />
      <div className='addresses-section'>
        <fieldset role='group' aria-label='Mailing address'>
          <AddressTemplate
            {...props}
            type = 'mailing'
          />
        </fieldset>
      </div>
    </div>
  )
};

export default Form;
