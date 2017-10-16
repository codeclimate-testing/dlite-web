'use strict';

import React from 'react';

import { updateSuspendedLicenseInfo }   from "../../actions/index";
import Form                             from "../../presentations/apply/suspended-license-info-form.jsx";
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {
  let onSubmit = navigateOnSubmit('/about-me/social-security', props);

  return (
    <Form
      onSubmit                = { onSubmit }
      onChange                = { props.onChange }
      suspendedLicenseInfo    = { props.suspendedLicenseInfo }
      continueDisabled        = { false }
    />
  );
};

function mapStateToProps(state) {
  return {
    suspendedLicenseInfo: state.application.suspendedLicenseInfo
  };
}

export default connectForm(mapStateToProps, updateSuspendedLicenseInfo, ConnectedForm);
