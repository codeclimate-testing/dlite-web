'use strict';

import React from 'react';

import { updateExistingDlIdInfo }   from "../../actions/index";
import Form                             from "../../presentations/apply/existing-dl-id-info-form.jsx";
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {
  let onSubmit = navigateOnSubmit('/about-me/previous-names', props);

  return (
    <Form
      onSubmit                = { onSubmit }
      onChange                = { props.onChange }
      existingDLIDInfo        = { props.existingDLIDInfo }
      continueDisabled        = { false }
    />
  );
};

function mapStateToProps(state) {
  return {
    existingDLIDInfo: state.application.existingDLIDInfo
  };
}

export default connectForm(mapStateToProps, updateExistingDlIdInfo, ConnectedForm);
