'use strict';

import React from 'react';

import { updateEyeColor }         from "../actions/index";
import Form                       from '../presentations/eye-color-form.jsx';
import connectForm                from '../helpers/connect-form';
import navigateOnSubmit           from '../helpers/navigate-on-submit';
import * as dataPresent       from '../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = !dataPresent.value(props.eyeColor);
  const onSubmit = navigateOnSubmit('/about-me/appearance/hair', props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.eyeColor}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    eyeColor: state.application.eyeColor.eyeColor
  };
}

export default connectForm(mapStateToProps, updateEyeColor, ConnectedForm);
