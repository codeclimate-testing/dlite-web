'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';

const Message = (props) => {
  if (props.organDonation.donateMoney !== 'Yes') { return null; }
  return (
    <MessageBox className='thanks'>
      <div className = 'donate-money-yes-info'>
        <p>Thank you for your donation! We will add $2 to your total fee.</p>
      </div>
    </MessageBox>
  );
};

const DonateContribution = (props) => {
  return (
    <div className='donate-money-form'>
      <h2 className='question'>Do you want to make a voluntary contribution of $2?</h2>
      <p>Your donation helps support and promote organ and tissue donation.</p>

      <RadioCollection
        {...props}
        name='donateMoney'
      >
        { radioYesNoGroup() }
      </RadioCollection>

      <Message {...props} />
    </div>
  );
};

export default DonateContribution;
