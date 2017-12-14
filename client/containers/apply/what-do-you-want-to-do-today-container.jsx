'use strict';

import React from 'react';
import { connect } from "react-redux";

import {
  updateCardType,
  focusPageElement,
  blurPageElement
} from "../../actions/index";

import Page                   from "../../presentations/page.jsx";
import Presentation           from "../../presentations/apply/choose-card-form.jsx";

import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import onInputChange          from '../../helpers/on-input-change';
import onFormSubmit           from '../../helpers/on-form-submit';
import { ageChecks }          from '../../helpers/calculate-age';
import * as dataPresent       from '../../helpers/data-present';

const Form = (props) => {
  let address = '/real-id';
  if(ageChecks.Under15Half(props.dateOfBirth) && props.cardType.DL) {
    address             =   '/youth-license-notification';
  }
  let onSubmit          =   navigateOnSubmit(address, props);
  let onBack            =   navigateOnBack('/my-basics/date-of-birth', props);
  let continueDisabled  =   !dataPresent.cardType(props.cardType);
  let pageTitle         =   'DMV: License application'

  return (
    <Page
      {...props}
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
    >
      <Presentation
        {...props}
        onSubmit          = { onSubmit }
        onBack            = { onBack }
        continueDisabled  = { continueDisabled }
      />
    </Page>
  );
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
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

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
