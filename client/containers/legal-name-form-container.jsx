'use strict';

import React from 'react';

import { updateLegalName }  from "../actions/index";
import FormPresentation     from "../presentations/name-form.jsx";
import connectForm          from '../helpers/connect-form';
import navigateOnSubmit     from '../helpers/navigate-on-submit';
import * as dataPresent     from '../helpers/data-present';

const Form = (props) => {
  const continueDisabled = !dataPresent.legalName(props.legalName);
  const onSubmit = navigateOnSubmit('/about-me/date-of-birth', props);

  return (
    <FormPresentation
      onSubmit={onSubmit}
      onChange={props.onChange}
      legalName={props.legalName}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    legalName: state.application.legalName
  };
}

export default connectForm(mapStateToProps, updateLegalName, Form);
