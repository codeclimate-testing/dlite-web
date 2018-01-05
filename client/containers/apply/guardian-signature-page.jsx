'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';

import handlers                     from '../../helpers/handlers';
import * as dataPresent             from '../../helpers/data-present';
import {
  updateGuardianSignatureFirst,
  updateGuardianSignatureSecond
 }     from '../../actions/index';

import Presentation                 from '../../presentations/apply/guardian-signature-page.jsx';

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
  const onFirstChange    = handlers.onInputChange(updateGuardianSignatureFirst, dispatch);
  const onSecondChange = handlers.onInputChange(updateGuardianSignatureSecond, dispatch);
  const onSubmit        = handlers.onFormSubmit(dispatch);
  const onBlur          = handlers.onBlur(dispatch);
  const onFocus         = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onFirstChange,
    onSecondChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
