'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import { donateMoney }    from '../../../helpers/data/organ-donation';
import Translator         from '../../../i18n/translator-tag.jsx';

const Message = (props) => {
  if (!donateMoney(props)) { return null; }
  return (
    <MessageBox className='thanks'>
      <div className = 'donate-money-yes-info'>
        <Translator
          tag             = 'p'
          translationPath = 'organDonation.monetaryContribution.messageYes'
        />
      </div>
    </MessageBox>
  );
};

const DonateContribution = (props) => {
  return (
    <div className='donate-money-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'organDonation.monetaryContribution.prompt'
      />
      <span tag='p' className='translation-missing'>
        Your donation helps support and promote organ and tissue donation.
      </span>

      <fieldset>
        <RadioCollection
          {...props}
          name  = 'donateMoney'
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </fieldset>

      <Message {...props} />
    </div>
  );
};

export default DonateContribution;
