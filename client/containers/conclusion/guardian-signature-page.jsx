'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';

import handlers                     from '../../helpers/handlers';
import * as dataPresent             from '../../helpers/data-present';
import {
  updateGuardianSignatureFirst,
  updateGuardianSignatureSecond
 }     from '../../actions/index';

import Presentation                 from '../../presentations/conclusion/guardian-signature-page.jsx';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/summary', props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = !dataPresent.guardianSignature(props.guardianSignature);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    guardianSignature:  state.application.guardianSignature,
    focused:            state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onFirstChange         = handlers.onInputChange(updateGuardianSignatureFirst, dispatch);
  const onSecondChange        = handlers.onInputChange(updateGuardianSignatureSecond, dispatch);
  const onSubmit              = handlers.onFormSubmit(dispatch);
  const onBlur                = handlers.onBlur(dispatch);
  const onFocus               = handlers.onFocus(dispatch);
  const onFocusClearValidation  = handlers.onFocusClearValidation(dispatch);
  const onFirstSelectChange   = handlers.onSelectChange(updateGuardianSignatureFirst, dispatch);
  const onSecondSelectChange  = handlers.onSelectChange(updateGuardianSignatureSecond, dispatch);

  return {
    onSubmit,
    onFirstChange,
    onSecondChange,
    onBlur,
    onFocus,
    onFocusClearValidation,
    onFirstSelectChange,
    onSecondSelectChange
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
