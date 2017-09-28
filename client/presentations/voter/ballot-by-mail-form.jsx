'use strict';

import React                  from 'react';

import SelectorCollection     from '../selector-collection.jsx';
import HomeLink               from '../home-link.jsx';
import ContinueButton         from '../continue-button.jsx';
import FAQDrawer              from '../faq-drawer.jsx';

const VALUES = ['Yes', 'No'];

const BallotByMailForm = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Would you like to get your ballot by mail before each election?</h4>
      <form onSubmit={props.onSubmit} className='ballot-by-mail-form'>

        <div className='inner-bottom'>
          <SelectorCollection
            name          = 'ballotByMail'
            values        = {VALUES}
            onChange      = {props.onChange}
            selectedValue = {props.selectedValue}
          />
        </div>

        <div className='inner-bottom'>
          <FAQDrawer
            faqDrawerClass = {props.faqDrawerClass}
            faqDrawerText  = {props.faqDrawerText}
          />
        </div>

        <ContinueButton
          disabled = {props.continueDisabled}
        />

      </form>
    </div>
  );
};

export default BallotByMailForm;
