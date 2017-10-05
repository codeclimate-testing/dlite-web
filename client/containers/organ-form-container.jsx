'use strict';

import React from 'react';

import { updateOrgan }            from "../actions/index";
import Form                       from '../presentations/organ-form.jsx';
import connectForm                from '../helpers/connect-form';
import navigateOnSubmit           from '../helpers/navigate-on-submit';
import * as dataPresent           from '../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  const onSubmit = navigateOnSubmit('/about-me/social-security', props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      organ={props.organ}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    organ: state.application.organ
  };
}

export default connectForm(mapStateToProps, updateOrgan, ConnectedForm);
