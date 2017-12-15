'use strict';

import React from 'react';
import { connect } from "react-redux";

import {
  updateCardType,
  blurPageElement,
  focusPageElement
} from '../../actions/index';

import onInputChange                  from '../../helpers/on-input-change';
import onFormSubmit                   from '../../helpers/on-form-submit';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import navigateOnBack                 from '../../helpers/navigate-on-back';
import * as dataPresent               from '../../helpers/data-present';
import { getCurrentAge, ageChecks }   from '../../helpers/calculate-age';

import Presentation                   from '../../presentations/apply/youth-license-notification.jsx';

const Form = (props) => {

  // don't disable the continue button if user is older than 15
  const continueDisabled  = ageChecks.Under15(props.dateOfBirth) ? props.cardType.youthIDInstead !== 'Yes' : false;
  const onSubmit          = navigateOnSubmit('/real-id', props);
  const onBack            = navigateOnBack('/what-do-you-want-to-do-today', props);

  // defaults are for users between ages 15 and 15.5. users only see this page if they are under 15.5
  let title               = 'You must be 15.5 years old to get a learners permit.';
  let paragraph           = 'If you go to a DMV office sooner to complete your application, you can only apply for a Junior permit. These permits are issued only in exceptional circumstances.';
  let question            = 'Do you want to apply for an ID instead?';
  let endMessage          = '';

  if(ageChecks.Under15(props.dateOfBirth)) {
    title = 'You must be 15 years old to start an application for a learners permit.';
    paragraph = 'In exceptional circumstances youth between 14 and 15.5 can get a Junior permit. Visit an office or consult documentation on the DMV website if you feel you might be eligible for a Junior permit.';
    question='Do you want to apply for an ID instead?';
    endMessage = !props.cardType.ID ? 'Ok, please come back when you turn 15.' : '';
  }
 
  const checkAnswer = (isChecked, updateID) => {
    let answer = isChecked === 'Yes';
    
    // update props.cardType.ID if updateID is true or if user is under 15 - don't want to change it for users who are over 15 who select "no" to getting an ID instead because they are able to start application for both ID and DL
    if(updateID || ageChecks.Under15(props.dateOfBirth)) {
      props.update('ID', answer);
    }

    props.update('DL', !answer); 
  };

  const Text = () => {
    return (
      <div>
        <h4>{title}</h4>
        <h5>{paragraph}</h5>
        <h4>{question}</h4>
      </div>
    )
  };

  const EndMessage = (props) => {
    if(props.cardType.youthIDInstead !== 'No') { return null; }
    return (<h4>{endMessage}</h4>);
  };

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      selectedValue={ props.cardType.youthIDInstead }
      continueDisabled={continueDisabled}
      checkAnswer={ checkAnswer }
    >
      <Text />
      <EndMessage 
        cardType = { props.cardType }
      />
    </Presentation>
  )
};

function mapStateToProps(state) {
  return {
    cardType:    state.application.cardType,
    dateOfBirth: state.application.dateOfBirth
    //focused: state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onBlur = () => {
    dispatch(blurPageElement());
  };

  const onFocus = (event) => {
    let value = (event.target && event.target.value) || '';
    dispatch(focusPageElement(value));
  };

  const onChange = onInputChange(updateCardType, dispatch);
  const onSubmit = onFormSubmit;

  const update = (name, value) => {
    return dispatch(updateCardType(name, value));
  };

  return {
    onSubmit,
    onChange,
    update,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
