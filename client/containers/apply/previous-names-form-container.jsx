'use strict';

import React from 'react';

import { updatePreviousNamesInfo }         from "../../actions/index";
import Form                            from '../../presentations/apply/previous-names-form.jsx';
import connectForm                     from '../../helpers/connect-form';
import navigateOnSubmit                from '../../helpers/navigate-on-submit';
import * as dataPresent                from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let value = props.hasPreviousNames;
  let continueDisabled  = !dataPresent.value(value);
  let onSubmit          = navigateOnSubmit('/about-me/enter-previous-names', props);

  if(value === 'No') {
    onSubmit = navigateOnSubmit('/my-history/license-issues', props);
  }

  return (
    <Form
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      selectedValue     = { value }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    hasPreviousNames: state.application.previousNamesInfo.hasPreviousNames
  };
}

export default connectForm(mapStateToProps, updatePreviousNamesInfo, ConnectedForm);
