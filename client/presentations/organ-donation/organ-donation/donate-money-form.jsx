'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import { donateMoney }    from '../../../helpers/data/organ-donation';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Message = (props) => {
  if (!donateMoney(props)) { return null; }
  return (
    <MessageBox className='thanks'>
      <div className = 'donate-money-yes-info'>
      {convertToHtml('p', translations.organDonation.monetaryContribution.messageYes)}
      </div>
    </MessageBox>
  );
};

const DonateContribution = (props) => {
  return (
    <div className='donate-money-form'>
      {convertToHtml('h2', translations.organDonation.monetaryContribution.prompt, 'question')}
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
