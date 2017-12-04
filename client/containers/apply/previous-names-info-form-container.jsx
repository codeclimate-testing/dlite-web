'use strict';

import React from 'react';

import { updatePreviousNamesInfo }  from "../../actions/index";
import FormPresentation             from "../../presentations/apply/previous-names-info-form.jsx";
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import * as dataPresent             from '../../helpers/data-present';

const Form = (props) => {
  let continueDisabled  = !dataPresent.previousNamesInfo(props.previousNamesInfo);
  let onSubmit          = navigateOnSubmit('/my-history/license-issues/', props);

  return (
    <FormPresentation
      onSubmit              = { onSubmit }
      onChange              = { props.onChange }
      previousNamesInfo     = { props.previousNamesInfo }
      continueDisabled      = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    previousNamesInfo: state.application.previousNamesInfo
  };
}

export default connectForm(mapStateToProps, updatePreviousNamesInfo, Form);
