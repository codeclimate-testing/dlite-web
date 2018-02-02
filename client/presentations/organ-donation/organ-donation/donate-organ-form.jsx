'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import translations       from '../../../i18n';
import {
  donateOrganYes,
  donateOrganNo
} from '../../../helpers/data/organ-donation';

const MessageForYesChoice = (props) => {
  if (!donateOrganYes(props)) { return null; }
  return (
    <MessageBox className='info'>
      <div className = 'donate-organ-yes-info'>
        <p>{translations.organDonation.organDonor.messageYes}</p>
      </div>
    </MessageBox>
  );
};

const MessageForNoChoice = (props) => {
  if (!(donateOrganNo(props))) { return null;}
  return (
    <MessageBox className='info'>
      <div className = 'donate-organ-no-info'>
        <h4>{translations.organDonation.organDonor.messageNo}</h4>
        <p className='translation-missing'>If you wish to remove your name from the registry, you must contact Donate
        Life California. DMV can remove the pink dot from your DL/ID card but cannot remove you from the registry.</p>
      </div>
    </MessageBox>
  );
};


const DonateOrgan = (props) => {
  return (
    <div className='donate-organ-form'>
      <h2 className='question'>{translations.organDonation.organDonor.prompt}</h2>
      <p>{translations.organDonation.organDonor.validationMessage}</p>

      <RadioCollection
        {...props}
        name='donateOrgan'
      >
        { radioYesNoGroup() }
      </RadioCollection>

      <MessageForYesChoice organDonation={props.organDonation} />
      <MessageForNoChoice organDonation={props.organDonation} />
    </div>
  );
};

export default DonateOrgan;
