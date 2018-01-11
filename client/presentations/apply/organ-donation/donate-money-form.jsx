'use strict';

import React              from 'react';
import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import FAQDrawer          from '../../faq-drawer.jsx';

const DonateContribution = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='donate-money-form'>
      <hr/>
      <h2 className='question'>Do you want to make a voluntary contribution of $2?</h2>
      <p><em>(optional)</em></p>
      <p>Your donation helps support and promote organ and tissue donation.</p>
        <div className='inner-bottom'>
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
        </div>

        <div className='inner-bottom'>
          { props.organDonation.donateMoney === 'Yes' &&
            <div className = 'donate-money-yes-info'>
              <p>Thank you for your donation! We will add $2 to your total fee.</p>
            </div>
          }
        </div>
    </div>
  );
};

export default DonateContribution;
