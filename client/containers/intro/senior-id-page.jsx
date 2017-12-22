'use strict';

import React from 'react';
import { connect } from "react-redux";

import handlers               from '../../helpers/handlers';
import * as dataPresent       from '../../helpers/data-present';

import { updateSeniorID }     from "../../actions/index";
import Presentation           from "../../presentations/intro/senior-id-page.jsx";

const Page = (props) => {
  let onSubmit          =   handlers.navigateOnSubmit('/real-id', props);
  let onBack            =   handlers.navigateOnBack('/what-do-you-want-to-do-today', props);
  let continueDisabled  =   !dataPresent.value(props.seniorID);

  return (
    <Presentation
      {...props}
      continueDisabled  = { continueDisabled }
      onBack            = { onBack }
      onSubmit          = { onSubmit }
    />
  )
};

const mapStateToProps = (state) => {
  return {
    seniorID :  state.application.seniorID,
    focused:    state.ui.focus
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange  = handlers.onInputChange(updateSeniorID, dispatch);
  const onSubmit  = handlers.onFormSubmit;
  const onBlur    = handlers.onBlur(dispatch);
  const onFocus   = handlers.onFocus(dispatch);

  return {
    onChange,
    onSubmit,
    onBlur,
    onFocus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
