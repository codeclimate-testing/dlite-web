'use strict';

import React from 'react';
import { connect } from "react-redux";

import { updateSeniorID }     from "../../actions/index";
import Presentation           from "../../presentations/intro/senior-id-page.jsx";

import * as dataPresent       from '../../helpers/data-present';
import handlers               from '../../helpers/handlers';

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
    seniorID :  state.application.seniorID
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateSeniorID, dispatch);
  const onSubmit   = handlers.onFormSubmit;

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
