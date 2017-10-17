'use strict';

import React from 'react';

import { updateSuspendedLicenseInfo }   from "../../actions/index";
import Form                             from "../../presentations/apply/suspended-license-decision-form.jsx";
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let value = props.isSuspended;
  const continueDisabled = !(dataPresent.value(value));
  let onSubmit = navigateOnSubmit('/about-me/social-security', props);

  if(value === 'Yes') {
    onSubmit = navigateOnSubmit('/about-me/enter-revoked-suspended', props);
  }

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.isSuspended}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    isSuspended: state.application.suspendedLicenseInfo.isSuspended
  };
}

export default connectForm(mapStateToProps, updateSuspendedLicenseInfo, ConnectedForm);
