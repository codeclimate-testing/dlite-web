'use strict';

import React              from 'react';
import RadioSelector      from '../radio-selector.jsx';
import FAQDrawer          from '../faq-drawer.jsx';

const CONTRIBUTION_YES = 'donate-contribution-yes'
const MESSAGE_YES = <p>Thank you for your donation! We will add $2 to your total fee.</p>

const DonateContribution = (props) => {
  return (
    <div className='donate-contribution-form'>
      <h4>Do you want to make a voluntary contribution of $2?</h4>
      <p><i>(optional)</i></p>
      <p>Your donation helps support and promote organ and tissue donation.</p>
        <div className='inner-bottom'>
          <RadioSelector  
            {...props}
            name='contribute'
            value='Yes'
            text='Yes'
            selected={ props.organDonation.contribute === 'Yes' }
            organDonation={ props.organDonation.contribute }
          />
          <RadioSelector  
            {...props}
            name='contribute'
            value='No'
            text='No'
            selected={ props.organDonation.contribute === 'No' }
            organDonation={ props.organDonation.contribute }
          />
        </div>

        <div className='inner-bottom'>
          { props.organDonation.contribute === 'Yes' &&
            <FAQDrawer
            faqDrawerClass = {CONTRIBUTION_YES}
            faqDrawerText  = {MESSAGE_YES}
            />
          }
        </div>
    </div>
  );
};

export default DonateContribution;
