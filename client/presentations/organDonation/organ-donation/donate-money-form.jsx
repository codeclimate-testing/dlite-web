'use strict';

import React              from 'react';
import RadioSelector      from '../../radio-selector.jsx';
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
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='donate-money-form'>
      <h2 className='question'>Do you want to make a voluntary contribution of $2?</h2>
      <p>Your donation helps support and promote organ and tissue donation.</p>

      <RadioCollection
        {...props}
        name='donateMoney'
        text={values}
      >
        <RadioSelector
          value='Yes'
        />
        <RadioSelector
          value='No'
        />
      </RadioCollection>

      <Message {...props} />
    </div>
  );
};

export default DonateContribution;
