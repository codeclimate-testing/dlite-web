'use strict';

import React              from 'react';
import AddressTemplate    from '../../address-template.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {
  if(props.isSameAsHome !== 'No') { return null; }

  return (
    <div className='mailing-address-form'>
      <hr />
        {convertToHtml('h2', translations.myBasics.addressesPage.mailingAddressPrompt, 'question')}
        {convertToHtml('p', translations.myBasics.addressesPage.explanation)}
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
