'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';
import {
  donateOrganYes,
  donateOrganNo
} from '../../../helpers/data/organ-donation';

const MessageForYesChoice = (props) => {
  if (!donateOrganYes(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='donate-organ-yes-info'>
        <Translator
          tag             = 'p'
          translationPath = 'organDonation.organDonor.messageYes'
        />
      </div>
    </MessageBox>
  );
};

const MessageForNoChoice = (props) => {
  if (!(donateOrganNo(props))) { return null;}

  return (
    <MessageBox className='info'>
      <div className = 'donate-organ-no-info'>
        <Translator
          tag             = 'p'
          translationPath = 'organDonation.organDonor.messageNo'
        />
      </div>
    </MessageBox>
  );
};


const DonateOrgan = (props) => {

  return (
    <div className='donate-organ-form'>
      <Translator
        tag             =  'h2'
        className       = 'question'
        translationPath = 'organDonation.organDonor.prompt'
        tabIndex        = '0'
      />
      <Translator
        tag             = 'p'
        translationPath = 'organDonation.organDonor.validationMessage'
      />

      <fieldset role='group' aria-label='Donate organs?'>
        <RadioCollection
          {...props}
          name='donateOrgan'
        >
          { radioYesNoGroup() }
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
