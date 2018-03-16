'use strict';

import React              from 'react';
import AddressTemplate    from '../../address-template.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';
import { notSameAsHome }  from '../../../helpers/data/address';

const Form = (props) => {
  if(!notSameAsHome(props)) { return null; }
  let locale = props.locale;
  return (
    <div className='mailing-address-form'>
      <hr />
      <Translation tag='h2' className='question'>
        {translations[locale].myBasics.addressesPage.mailingAddressPrompt}
      </Translation>
      <Translation tag='p'>
        {translations[locale].myBasics.addressesPage.explanation}
      </Translation>
      <div className='addresses-section'>
        <fieldset>
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
