'use strict';

import React            from 'react';
import translations     from '../../../i18n'
import AddressTemplate  from '../../address-template.jsx';

const Form = (props) => {
  if(props.isSameAsHome !== 'No') { return null; }

  return (
    <div className='mailing-address-form'>
      <hr/>
      <h2 className='question'>{translations.myBasics.addressesPage.mailingAddressPrompt}</h2>
      <p>{translations.myBasics.addressesPage.explanation}</p>
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
