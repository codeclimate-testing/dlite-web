'use strict';

import React              from 'react';
import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import FAQDrawer          from '../faq-drawer.jsx';
import Page               from '../page.jsx';

const DONATE_ORGAN_YES    = 'donate-organ-yes';
const MESSAGE_YES         = <p>Answering <em>Yes</em> adds your name to the Donate Life California Organ and
                            Tissue Donor Registry, and a pink "donor" dot will appear on your DL/ID card.</p>
const DONATE_ORGAN_NO     = 'donate-organ-no';
const MESSAGE_NO          = <div><h4>Answering <em>No</em> will not remove your name from the registry.</h4>
                            <p>If you wish to remove your name from the registry, you must contact Donate
                            Life California. DMV can remove the pink dot from your DL/ID card but cannot remove you from the registry.</p></div>
let pageTitle = 'DMV: License application - Organ donation'

const DonateOrgan = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='3'
      sectionName='Organ donation'
      {...props}
    >
      <div className='organ-form'>
        <h4>Do you wish to be an organ or tissue donor?</h4>
        <p><em>(optional)</em></p>
        <p>You must mark <em>Yes</em> to maintain the donor dot on your drivers licence.</p>
        <div className='inner-bottom'>
          <RadioCollection 
            {...props}
            name='donate'
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
          { props.organDonation.donate === 'Yes' &&
            <FAQDrawer
            faqDrawerClass = {DONATE_ORGAN_YES}
            faqDrawerText  = {MESSAGE_YES}
            />
          }

        { props.organDonation.donate === 'No' &&
          <FAQDrawer
          faqDrawerClass = {DONATE_ORGAN_NO}
          faqDrawerText  = {MESSAGE_NO}
          />
        }
        </div>
      </div>
    </Page>
  );
};

export default DonateOrgan;
