'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import Page                    from '../page.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';
import FAQDrawer               from '../faq-drawer.jsx';
import { getCurrentAge, getAgeGroup }     from '../../helpers/calculate-age';

const VALUES = ['Yes', 'No', 'Skip Section'];
let pageTitle = 'DMV: License application - Voting registration'
document.title = pageTitle;

const CitizenStatusForm = (props) => {
   let ageGroup = getAgeGroup(props.dateOfBirth.age);
   let documentHeader = [];
   let documentText = [];
   let documentFaq = [];

if (ageGroup === "YOUTH_GREATER_THAN_15_AND_LESS_THAN_18") {
    documentHeader.push(
      'Voting pre-registration'
    )
    documentText.push(
      <h5 key="header">If you answer No or Skip Section, you cannot pre-register to vote.</h5>
    )
    documentFaq.push(
      'If you are not a U.S. citizen, you are not eligible to pre-register to vote. Your response to this question will not be shared with election officials.'
    );
  }
  else {
    documentHeader.push(
     'Voting registration'
    )
    documentText.push(
      <h5 key="header">If you answer No or Skip Section, you cannot register to vote.</h5>
    )
     documentFaq.push(
      'If you are not a U.S. citizen, you are not eligible to register to vote. Your response to this question will not be shared with election officials.'
    );
  }

  return (
      <Page
      pageTitle={pageTitle}
      sectionNumber='3'
      sectionName= { documentHeader }
      {...props} 
      >
      <div>
        <h4>Are you a United States citizen?</h4>
        { documentText }
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
          faqDrawerText  = { documentFaq } />

          <NavigationButtons {...props} />
        </form>
        </div>
      </Page>
  );
};


export default CitizenStatusForm;
