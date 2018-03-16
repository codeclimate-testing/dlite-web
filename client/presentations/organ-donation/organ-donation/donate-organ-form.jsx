'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';
import {
  donateOrganYes,
  donateOrganNo
} from '../../../helpers/data/organ-donation';

const MessageForYesChoice = (props) => {
  if (!donateOrganYes(props)) { return null; }
  let locale = props.locale;
  return (
    <MessageBox className='info'>
      <div className = 'donate-organ-yes-info'>
        <Translation tag='p'>
          {translations[locale].organDonation.organDonor.messageYes}
        </Translation>
      </div>
    </MessageBox>
  );
};

const MessageForNoChoice = (props) => {
  let locale = props.locale;
  if (!(donateOrganNo(props))) { return null;}
  return (
    <MessageBox className='info'>
      <div className = 'donate-organ-no-info'>
        <Translation tag='p'>
          {translations[locale].organDonation.organDonor.messageNo}
        </Translation>
      </div>
    </MessageBox>
  );
};


const DonateOrgan = (props) => {
  let locale = props.locale;
  return (
    <div className='donate-organ-form'>
      <Translation tag='h2' className='question'>
        {translations[locale].organDonation.organDonor.prompt}
      </Translation>
      <Translation tag='p'>
        {translations[locale].organDonation.organDonor.validationMessage}
      </Translation>

      <fieldset>
        <RadioCollection
          {...props}
          name='donateOrgan'
        >
          { radioYesNoGroup(locale) }
        </RadioCollection>
      </fieldset>

      <MessageForYesChoice
        {...props}
        organDonation={props.organDonation}
      />
      <MessageForNoChoice
        {...props}
        organDonation={props.organDonation}
      />
    </div>
  );
};

export default DonateOrgan;
