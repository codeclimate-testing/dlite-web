'use strict';

import React from 'react';

import { updateSuspendedLicense }   from "../../actions/index";
import Form                         from "../../presentations/apply/suspended-license-form.jsx";
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/about-me/social-security', props);

  return (
    <Form
      onSubmit            = { onSubmit }
      onChange            = { props.onChange }
      suspendedLicense    = { props.suspendedLicense }
      continueDisabled    = { false }
    />
  );
};

function mapStateToProps(state) {
  return {
    suspendedLicense: state.application.suspendedLicense
  };
}

export default connectForm(mapStateToProps, updateSuspendedLicense, ConnectedForm);
