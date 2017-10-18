'use strict';

import React from 'react';
import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';
import FAQDrawer               from '../faq-drawer.jsx';

const values = ['Yes', 'No']
const DONATE_ORGAN_YES    = 'donate-organ-yes';
const MESSAGE_YES         = <p>Answering <em>Yes</em> adds your name to the Donate Life California Organ and
                            Tissue Donor Registry, and a pink "donor" dot will appear on your DL/ID card.</p>
const DONATE_ORGAN_NO     = 'donate-organ-no';
const MESSAGE_NO          = <div><h4>Answering <em>No</em> will not remove your name from the registry.</h4>
                            <p>If you wish to remove your name from the registry, you must contact Donate
                            Life California. DMV can remove the pink dot from your DL/ID card but cannot remove you from the registry.</p></div>

const Organ = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Do you wish to be an organ or tissue donor?</h4>
      <p><em>(optional)</em></p>
      <p>You must mark <em>Yes</em> to maintain the donor dot on your drivers licence.</p>
      <form onSubmit={ props.onSubmit } className='organ-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='donate'
            values={values}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <div className='inner-bottom'>
          { props.selectedValue === 'Yes' &&
            <FAQDrawer
            faqDrawerClass = {DONATE_ORGAN_YES}
            faqDrawerText  = {MESSAGE_YES}
            />
          }

        { props.selectedValue === 'No' &&
          <FAQDrawer
          faqDrawerClass = {DONATE_ORGAN_NO}
          faqDrawerText  = {MESSAGE_NO}
          />
        }

        </div>


        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default Organ;
