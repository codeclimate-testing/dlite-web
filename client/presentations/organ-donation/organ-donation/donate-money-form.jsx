'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import { donateMoney }    from '../../../helpers/data/organ-donation';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const Message = (props) => {
  if (!donateMoney(props)) { return null; }
  let locale = props.locale;
  return (
    <MessageBox className='thanks'>
      <div className = 'donate-money-yes-info'>
        <Translation tag='p'>
          {translations[locale].organDonation.monetaryContribution.messageYes}
        </Translation>
      </div>
    </MessageBox>
  );
};

const DonateContribution = (props) => {
  let locale = props.locale;
  return (
    <div className='donate-money-form'>
      <Translation tag='h2' className='question'>
        {translations[locale].organDonation.monetaryContribution.prompt}
      </Translation>
      <Translation tag='p' className='translation-missing'>
        Your donation helps support and promote organ and tissue donation.
      </Translation>

      <fieldset>
        <RadioCollection
          {...props}
          name='donateMoney'
        >
          { radioYesNoGroup(locale) }
        </RadioCollection>
      </fieldset>

      <Message {...props} />
    </div>
  );
};

export default DonateContribution;
