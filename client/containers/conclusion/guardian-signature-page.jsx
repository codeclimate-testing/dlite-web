'use strict';

import React                              from 'react';
import { connect }                        from 'react-redux';

import handlers                           from '../../helpers/handlers';
import { GuardianSignatureValidator }     from '../../helpers/validations';
import {
  updateGuardianSignature,
  updateGuardianSignatureFirst,
  updateGuardianSignatureSecond,
  updateGuardianContactDetailsFirst,
  updateGuardianContactDetailsSecond
 }     from '../../actions/index';

import Presentation                 from '../../presentations/conclusion/guardian-signature-page.jsx';

const Page = (props) => {
  let validations       = new GuardianSignatureValidator(props, props.validations);
  let onBack            = handlers.navigateOnBack(props, validations);
  let onSubmit          = handlers.navigateOrShowErrors('guardianSignature', props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    guardianSignature:  state.application.guardianSignature,
    focused:            state.ui.focus,
    validations:        state.ui.validations,
    accordions:         state.ui.accordions,
    locale:             state.ui.locale
  };
}

function mapDispatchToProps(dispatch) {
  const onGuardianSignatureChange        = handlers.onInputChange(updateGuardianSignature, dispatch);
  const onSignatureFirstChange           = handlers.onInputChange(updateGuardianSignatureFirst, dispatch);
  const onSignatureSecondChange          = handlers.onInputChange(updateGuardianSignatureSecond, dispatch);
  const onContactDetailsFirstChange      = handlers.onInputChange(updateGuardianContactDetailsFirst, dispatch);
  const onContactDetailsSecondChange     = handlers.onInputChange(updateGuardianContactDetailsSecond, dispatch);
  const onSubmit                         = handlers.onFormSubmit(dispatch);
  const onBlurValidate                   = handlers.onBlurValidate(dispatch);
  const onBlur                           = handlers.onBlur(dispatch);
  const onFocusClearValidation           = handlers.onFocusClearValidation(dispatch);
  const onSubmitShowErrors               = handlers.onSubmitShowErrors(dispatch);
  const onFocus                          = handlers.onFocus(dispatch);

  const onCheckboxFocus = (e) => {
    onFocus(e);
    onFocusClearValidation(e);
  };

  const onCheckboxBlur = (e) => {
    onBlur(e);
    onBlurValidate(e);
  };

  return {
    onGuardianSignatureChange,
    onSignatureFirstChange,
    onSignatureSecondChange,
    onContactDetailsFirstChange,
    onContactDetailsSecondChange,
    onSubmit,
    onBlurValidate,
    onBlur,
    onFocusClearValidation,
    onSubmitShowErrors,
    onFocus,
    onCheckboxBlur,
    onCheckboxFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
