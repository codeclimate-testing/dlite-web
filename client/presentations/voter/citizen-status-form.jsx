'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';
import FAQDrawer               from '../faq-drawer.jsx';

const VALUES = ['Yes', 'No', 'Skip Section'];

const CitizenStatusForm = (props) => {
  document.title = props.pageTitle;
  return (
    <div>
      <HomeLink />
      <h3>3 &raquo; Voter registration</h3>
      <hr></hr>

      <h4>Are you a United States citizen?</h4>
      <h5>If you answer No or Skip Section, you cannot register to vote.</h5>
      <form onSubmit={ props.onSubmit } className='citizen-status-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='citizenStatus'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <FAQDrawer
          faqDrawerClass = 'faq-citizen-status'
          faqDrawerText  = 'If you are not a U.S. citizen, you are not eligible to register to vote. Your response to this question will not be shared with election officials.'
        />

        <ContinueButton disabled={props.continueDisabled}/> <button type="button" onClick={props.onBack}>Back</button>
      </form>
    </div>
  );
};

export default CitizenStatusForm;
