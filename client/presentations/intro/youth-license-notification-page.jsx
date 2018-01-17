'use strict';

import React from 'react';

import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';

import { ageChecks }       from '../../helpers/calculate-age';
import { validToContinue } from '../../helpers/data/youth';

const FormHeader = (props) => {
  return (
    <div>
      <h2 className='question'>{props.title}</h2>
      <p>{props.helpText}</p>
      <h2 className='question'>Do you want to apply for an ID instead?</h2>
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
    <p>Ok, please come back when you turn 15.</p>
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
        <form onSubmit={ props.onSubmit } >
          <Header />
          <div className='row'>
            <RadioCollection  
              {...props}
              name = 'youthIDInstead'
              text = { values }
              onBlur  = { props.onBlurValidate }
              errorMessage = { props.validations.youthIDInstead() }
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

          <NavigationButtons {...props}
          errorMessage = {props.validations.youthIDInstead() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
