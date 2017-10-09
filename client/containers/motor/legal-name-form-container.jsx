'use strict';

import React from 'react';

import { updateLegalName }  from "../../actions/index";
import FormPresentation     from "../../presentations/motor/name-form.jsx";
import connectForm          from '../../helpers/connect-form';
import navigateOnSubmit     from '../../helpers/navigate-on-submit';
import * as dataPresent     from '../../helpers/data-present';

const Form = (props) => {
  let continueDisabled  =   !dataPresent.legalName(props.legalName);
  let onSubmit          =   navigateOnSubmit('/about-me/date-of-birth', props);
  let pageTitle           =   'About me: Legal name';

  return (
    <FormPresentation
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      legalName         = { props.legalName }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    legalName: state.application.legalName
  };
}

export default connectForm(mapStateToProps, updateLegalName, Form);
