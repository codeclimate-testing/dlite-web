'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { ChooseAppValidator } from '../../helpers/validations';
import { chooseApp }          from "../../actions/index";
import Presentation           from "../../presentations/get-started/choose-application-page.jsx";

const Page = (props) => {

  let validations       =   new ChooseAppValidator(props, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('chooseApplication', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

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
    chooseApp:    state.ui.chooseApp,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

export default connectForm(mapStateToProps, chooseApp, Page);