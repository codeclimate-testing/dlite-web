'use strict';

import React              from 'react';
import AddressTemplate    from '../../address-template.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';
import { notSameAsHome }  from '../../../helpers/data/address';

const Form = (props) => {
  if(!notSameAsHome(props)) { return null; }
  let locale = props.locale;
  return (
    <div className='mailing-address-form'>
      <hr />
        {convertToHtml('h2', translations[locale].myBasics.addressesPage.mailingAddressPrompt, 'question')}
        {convertToHtml('p', translations[locale].myBasics.addressesPage.explanation)}
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
