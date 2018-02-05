'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import { donateMoney }    from '../../../helpers/data/organ-donation';
import translations       from '../../../i18n';

const Message = (props) => {
  if (!donateMoney(props)) { return null; }
  return (
    <MessageBox className='thanks'>
      <div className = 'donate-money-yes-info'>
        <p>{translations.organDonation.monetaryContribution.messageYes}</p>
      </div>
    </MessageBox>
  );
};

const DonateContribution = (props) => {
  return (
    <div className='donate-money-form'>
      <h2 className='question'>{translations.organDonation.monetaryContribution.prompt}</h2>
      <p className='translation-missing'>Your donation helps support and promote organ and tissue donation.</p>

      <fieldset>
        <RadioCollection
          {...props}
          name='donateMoney'
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </fieldset>

      <Message {...props} />
    </div>
  );
};

export default DonateContribution;
