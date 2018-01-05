'use strict';

import React              from 'react';
import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
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
          <RadioCollection
            {...props}
            name='contribute'
            selectedValue={ props.organDonation.contribute }
          >
            <RadioSelector  
              value='Yes'
              text='Yes'
            />
            <RadioSelector  
              value='No'
              text='No'
            />
          </RadioCollection>
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
