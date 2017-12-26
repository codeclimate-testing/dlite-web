'use strict';

import React from 'react';
import { connect } from "react-redux";

import { updateOptOut } from '../../actions/index';

import handlers from '../../helpers/handlers';
import { hasValue } from '../../helpers/data/validations';
import { isPreregistering } from '../../helpers/calculate-age';

import OptOutForm from '../../presentations/voter-registration/opt-out-form.jsx';
import PreregOptOutForm from '../../presentations/voter-registration/opt-out-prereg-form.jsx';


const Form = (props) => {
  let value = props.optOut;
  const continueDisabled = !hasValue(value);

  let address = '/voting-registration/preferences';
  if ((props.optOut == "I am eligible to vote, but do not want to pre-register to vote") || (props.optOut === "opt-out")) {
    address = '/summary';
  } else if (props.optOut == "existing") {
    address = '/voting-registration/preferences-updated';
  }

  const onSubmit = handlers.navigateOnSubmit(address, props);
  const onBack = handlers.navigateOnBack(props);

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
  const onChange = handlers.onInputChange(updateOptOut, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
