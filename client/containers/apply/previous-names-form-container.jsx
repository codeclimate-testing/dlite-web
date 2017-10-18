'use strict';

import React from 'react';

import { updatePreviousNames }         from "../../actions/index";
import Form                            from '../../presentations/apply/previous-names-form.jsx';
import connectForm                     from '../../helpers/connect-form';
import navigateOnSubmit                from '../../helpers/navigate-on-submit';
import * as dataPresent                from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let value = props.previousNames;
  let continueDisabled  = !dataPresent.value(value);
  let onSubmit          = navigateOnSubmit('/about-me/enter-previous-names', props);
  let pageTitle         = 'About me: Previous Names';

  if(value === 'No') {
    onSubmit = navigateOnSubmit('/about-me/revoked-suspended', props);
  }

  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      selectedValue     = { value }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    previousNames: state.application.previousNames
  };
}

export default connectForm(mapStateToProps, updatePreviousNames, ConnectedForm);
