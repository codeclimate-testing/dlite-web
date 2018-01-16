'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import { updateLicenseType }    from "../../actions/index";
import Presentation             from "../../presentations/intro/license-type-page.jsx";
import handlers                 from '../../helpers/handlers';
import { LicenseTypeValidator } from '../../helpers/validations';

const Page = (props) => {

  let validations = new LicenseTypeValidator(props, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('chooseLicenseClass', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);
  let focus       = function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };

  return <Presentation
    {...props}
    onSubmit    = { onSubmit }
    onBack      = { onBack }
    validations = { validations }
    onFocus     = { focus }
  />;
};

const mapStateToProps = (state) => {
  return {
    cardType:     state.application.cardType,
    seniorID:     state.application.seniorID,
    licenseType:  state.application.licenseType,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateLicenseType, Page);

