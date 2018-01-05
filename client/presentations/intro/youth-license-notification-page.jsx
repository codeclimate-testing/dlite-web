'use strict';

import React from 'react';
import Page               from '../../containers/page.jsx';
import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

import { ageChecks }       from '../../helpers/calculate-age';
import { validToContinue } from '../../helpers/data/youth';

const FormHeader = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.helpText}</h5>
      <h4>Do you want to apply for an ID instead?</h4>
    </div>
  );
};

const Under15FormHeader = (props) => {
  return (
    <FormHeader
      title='You must be 15 years old to start an application for a learners permit.'
      helpText='In exceptional circumstances youth between 14 and 15.5 can get a Junior permit. Visit an office or consult documentation on the DMV website if you feel you might be eligible for a Junior permit.'
    />
  );
};

const YouthFormHeader = (props) => {
  return (
    <FormHeader
      title='You must be 15.5 years old to get a learners permit.'
      helpText='If you go to a DMV office sooner to complete your application, you can only apply for a Junior permit. These permits are issued only in exceptional circumstances.'
    />
  );
};

let ErrorMessage = (props) => {
  if (validToContinue(props)) { return null; }

  return (
    <h4>Ok, please come back when you turn 15.</h4>
  );
};

const Form = (props) => {
  const handleChange = (e) => {
    props.onChange(e); // update props.cardType.youthIDInstead
    props.checkAnswer(e.target.value, false); // update props.cardType.new
  }

  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  const Header = ageChecks.Under15(props.dateOfBirth) ? Under15FormHeader : YouthFormHeader;

  return (
    <Page
      sectionKey='intro'
      {...props}
    >
      <div className='youth-license-notification'>
        <Header />
        <form onSubmit={ props.onSubmit } >

          <div className='row inner-bottom'>
            <RadioCollection  
              {...props}
              name='youthIDInstead'
              text={values}
            >
              <RadioSelector 
                value='Yes'
              />
              <RadioSelector 
                value='No'
              />
            </RadioCollection>
 
            <div className='unit spacer' />
          </div>

          <ErrorMessage {...props} />

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  )
};

export default Form;
