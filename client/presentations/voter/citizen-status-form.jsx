'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';
import FAQDrawer               from '../faq-drawer.jsx';
import Page                   from '../page.jsx';

const VALUES = ['Yes', 'No', 'Skip Section'];

const CitizenStatusForm = (props) => {
  return (
    <Page
      sectionNumber='3'
      sectionName='Voting registration'
      {...props}
    >
      <div>
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

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default CitizenStatusForm;
