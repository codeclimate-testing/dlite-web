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
  updateGuardianContactDetailsSecond,
  updateGuardianIDDocFirst,
  updateGuardianIDDocSecond
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
    accordions:         state.ui.accordions
  };
}

function mapDispatchToProps(dispatch) {
  const onGuardianSignatureChange        = handlers.onInputChange(updateGuardianSignature, dispatch);
  const onSignatureFirstChange           = handlers.onInputChange(updateGuardianSignatureFirst, dispatch);
  const onSignatureSecondChange          = handlers.onInputChange(updateGuardianSignatureSecond, dispatch);
  const onContactDetailsFirstChange      = handlers.onInputChange(updateGuardianContactDetailsFirst, dispatch);
  const onContactDetailsSecondChange     = handlers.onInputChange(updateGuardianContactDetailsSecond, dispatch);
  const onIDDocFirstChange               = handlers.onInputChange(updateGuardianIDDocFirst, dispatch);
  const onIDDocSecondChange              = handlers.onInputChange(updateGuardianIDDocSecond, dispatch);
  const onSubmit                         = handlers.onFormSubmit(dispatch);
  const onBlurValidate                   = handlers.onBlurValidate(dispatch);
  const onFocusClearValidation           = handlers.onFocusClearValidation(dispatch);
  const onSubmitShowErrors               = handlers.onSubmitShowErrors(dispatch);
  const onFocus                          = handlers.onFocus(dispatch);

  return {
    onGuardianSignatureChange,
    onSignatureFirstChange,
    onSignatureSecondChange,
    onContactDetailsFirstChange,
    onContactDetailsSecondChange,
    onIDDocFirstChange,
    onIDDocSecondChange,
    onSubmit,
    onBlurValidate,
    onFocusClearValidation,
    onSubmitShowErrors,
    onFocus,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
