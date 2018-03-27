'use strict';

import React from 'react';

import radioYesNoGroup     from '../radio-yes-no-group.jsx';
import RadioCollection     from '../radio-selector-collection.jsx';
import NavigationButtons   from '../navigation-buttons.jsx';
import Page                from '../../containers/page.jsx';
import { ageChecks }       from '../../helpers/calculate-age';
import { validToContinue } from '../../helpers/data/youth';
import MessageBox          from '../message-box.jsx';
import Translator           from '../../i18n/translator-tag.jsx';

const FormHeader = (props) => {
  return (
    <div>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = { props.title }
      />
      <Translator
        tag             = 'p'
        className       = 'question'
        translationPath = { props.helpText }
      />
      <hr />
      <Translator
        tag             = 'h3'
        className       = 'question'
        translationPath = 'intro.youthDlNotificationPage.question'
      />
    </div>
  );
};

const Under15FormHeader = (props) => {
  if (!ageChecks.Under15(props.dateOfBirth)) { return null; }
  return (
    <FormHeader
      title     = 'You must be 15 years old to start an application for a learners permit.'
      helpText  = 'In exceptional circumstances youth between 14 and 15.5 can get a Junior permit. Visit an office or consult documentation on the DMV website if you feel you might be eligible for a Junior permit.'
      {...props}
    />
  );
};

const YouthFormHeader = (props) => {
  if (ageChecks.Under15(props.dateOfBirth)) { return null; }
  return (
    <FormHeader
      title     = 'intro.youthDlNotificationPage.prompt'
      helpText  = 'intro.youthDlNotificationPage.explanation'
      {...props}
    />
  );
};

let ErrorMessage = (props) => {
  if (validToContinue(props)) { return null; }

  return (
    <MessageBox className='info translation-missing'>Ok, please come back when you turn 15.</MessageBox>
  );
};

const Form = (props) => {
  const actionName = props.multCards ? 'youthIDOnly' : 'youthIDInstead';
  return (
    <Page
      sectionKey='intro'
      {...props}
    >
      <div className='youth-license-notification'>
        <form onSubmit={props.onSubmit} >
          <Under15FormHeader
            {...props}
            dateOfBirth = {props.dateOfBirth}
          />
          <YouthFormHeader
            dateOfBirth = {props.dateOfBirth}
            {...props}
          />
          <fieldset role='group' aria-label='Choose youth ID instead'>
            <RadioCollection
              { ...props }
              name = { actionName }
              onBlur = { props.onBlurValidate }
              errorMessage = { props.validations.youthIDInstead() }
            >
              {radioYesNoGroup()}
            </RadioCollection>
          </fieldset>

          <ErrorMessage {...props} />

          <NavigationButtons {...props}
            errorMessage = { props.validations.youthIDInstead() }
            continueHidden = { props.continueHidden }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
