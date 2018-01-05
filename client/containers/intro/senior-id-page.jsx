'use strict';

import React from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { hasValue }           from '../../helpers/data/validations';

import { updateSeniorID }     from "../../actions/index";
import Presentation           from "../../presentations/intro/senior-id-page.jsx";

const Page = (props) => {
  let onSubmit          =   handlers.navigateOnSubmit('/real-id', props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !hasValue(props.seniorID);

  return (
    <Presentation
      {...props}
      continueDisabled  = { continueDisabled }
      onBack            = { onBack }
      onSubmit          = { onSubmit }
      selectedValue     = { props.seniorID }
    />
  )
};

const mapStateToProps = (state) => {
  return {
    seniorID :  state.application.seniorID,
    focused:    state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateSeniorID, Page);