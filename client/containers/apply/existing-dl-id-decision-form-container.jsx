'use strict';

import React from 'react';

import { updateExistingDlIdInfo }       from "../../actions/index";
import Form                             from "../../presentations/apply/existing-dl-id-decision-form.jsx";
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let value = props.hasExisting;
  const continueDisabled = !(dataPresent.value(value));
  let onSubmit = navigateOnSubmit('/about-me/names-history', props);

  if(value === 'Yes') {
    onSubmit = navigateOnSubmit('/about-me/dl-id-number', props);
  }

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.hasExisting}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    hasExisting: state.application.existingDLIDInfo.hasExisting
  };
}

export default connectForm(mapStateToProps, updateExistingDlIdInfo, ConnectedForm);
