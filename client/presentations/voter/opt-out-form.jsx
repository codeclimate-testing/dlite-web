'use strict';

import React from 'react';
import NavigationButtons from '../navigation-buttons.jsx';
import Page from '../page.jsx';

import RadioSelectorCollection from '../radio-selector-collection.jsx';
import RadioSelector           from '../radio-selector.jsx';

const OptOutRadioFormContainer = (props) => {
  return (
    <Page
      {...props}
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
    >
      <div>
        <h4>Which best describes you?</h4>
        <form onSubmit={ props.onSubmit } className='opt-out-form'>
          <RadioSelectorCollection
            name='optOut'
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            selectedValue={ props.selectedValue }
            focused={props.focused}
          >
            {props.children}
          </RadioSelectorCollection>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

const OptOutForm = (props) => {
  return (
    <OptOutRadioFormContainer
      pageTitle='DMV: License application - Voting registration'
      sectionName='Voting registration'
      {...props}
    >
      <RadioSelector
        value='new'
        text='I am a new voter in California'
      />
      <RadioSelector
        value='existing'
        text='I am already registered to vote in California'
      />
      <RadioSelector
        value='opt-out'
        text='I am eligible to vote, but do not want to register to vote'
      />
    </OptOutRadioFormContainer>
  );
};

export default OptOutForm;
