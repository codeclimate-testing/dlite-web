'use strict';

import React                      from 'react';
import { updateMedicalHistory }   from '../../actions/index';
import * as dataPresent           from '../../helpers/data-present';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/apply/medical-history-page.jsx';

const ConnectedForm = (props) => {
  let continueDisabled            = !(dataPresent.hasMedicalCondition(props.medicalHistory))
  let showEnterMedicalCondition   = false
  let onSubmit                    = handlers.navigateOnSubmit('/my-history/license-and-id', props);
  let onBack                      = handlers.navigateOnBack(props);

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
    medicalHistory: state.application.medicalHistory,
    focused: state.ui.focus
  };
};

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateMedicalHistory, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
