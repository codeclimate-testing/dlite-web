'use strict';

import React from 'react';

import { updateVeteranService }    from '../../actions/index';
import * as dataPresent           from '../../helpers/data-present';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/apply/veterans-service-page.jsx';

const ConnectedForm = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/organ-donation', props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = !(dataPresent.veteransService(props.veteransService));

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
    veteransService: state.application.veteransService,
    legalName: state.application.legalName,
    cardType: state.application.cardType,
    cardAction: state.application.cardAction,
    focused: state.ui.focus
  };
};

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateVeteranService, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
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
