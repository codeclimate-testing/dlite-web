'use strict';

import React from 'react';

import { updatePreviousNames }      from "../../actions/index";
import FormPresentation             from "../../presentations/apply/previous-names-form.jsx";
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import * as dataPresent             from '../../helpers/data-present';

const Form = (props) => {
  let continueDisabled  = !dataPresent.previousNames(props.previousNames);
  let onSubmit          = navigateOnSubmit('/about-me/revoked-suspended/', props);
  let pageTitle         = 'About me: Previous Names';

  return (
    <FormPresentation
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      previousNames     = { props.previousNames }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    previousNames: state.application.previousNames
  };
}

export default connectForm(mapStateToProps, updatePreviousNames, Form);
