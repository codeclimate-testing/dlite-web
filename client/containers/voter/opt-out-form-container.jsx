'use strict';

import React from 'react';
import { connect } from "react-redux";

import {
  updateOptOut,
  blurPageElement,
  focusPageElement
} from '../../actions/index';

import onInputChange           from '../../helpers/on-input-change';
import onFormSubmit            from '../../helpers/on-form-submit';
import navigateOnSubmit        from '../../helpers/navigate-on-submit';
import navigateOnBack          from '../../helpers/navigate-on-back';
import * as dataPresent        from '../../helpers/data-present';
import { isPreregistering }    from '../../helpers/calculate-age';

import OptOutForm              from '../../presentations/voter/opt-out-form.jsx';
import PreregOptOutForm        from '../../presentations/voter/opt-out-prereg-form.jsx';


const Form = (props) => {
  let value = props.optOut;
  const continueDisabled = !dataPresent.value(value);

  let address = '/voting-registration/preferences';
  if ((props.optOut == "I am eligible to vote, but do not want to pre-register to vote") || (props.optOut === "opt-out")) {
    address = '/summary';
  } else if (props.optOut == "existing") {
    address = '/voting-registration/preferences-updated';
  }

  const onSubmit = navigateOnSubmit(address, props);
  const onBack   = navigateOnBack('/voting-registration/eligibility', props);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreregOptOutForm : OptOutForm;

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      selectedValue={props.optOut}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    optOut: state.application.optOut,
    dateOfBirth: state.application.dateOfBirth,
    focused: state.ui.focus
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

  const onChange = onInputChange(updateOptOut, dispatch);
  const onSubmit = onFormSubmit;

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
