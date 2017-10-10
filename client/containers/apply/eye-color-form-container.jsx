'use strict';

import React from 'react';

import { updateEyeColor }         from "../../actions/index";
import Form                       from '../../presentations/apply/eye-color-form.jsx';
import connectForm                from '../../helpers/connect-form';
import navigateOnSubmit           from '../../helpers/navigate-on-submit';
import * as dataPresent           from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled  = !dataPresent.value(props.eyeColor);
  let onSubmit          = navigateOnSubmit('/about-me/appearance/hair', props);
  let pageTitle         = 'About me: Eye color';
  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      selectedValue     = { props.eyeColor }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    eyeColor: state.application.eyeColor
  };
}

export default connectForm(mapStateToProps, updateEyeColor, ConnectedForm);
