'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import { updateLicenseType }    from "../../actions/index";
import Presentation             from "../../presentations/get-started/license-type-page.jsx";
import handlers                 from '../../helpers/handlers';
import { LicenseTypeValidator } from '../../helpers/validations';

const Page = (props) => {

  let validations = new LicenseTypeValidator(props, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors(props.addressName, props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

  return <Presentation
    {...props}
    onSubmit    = { onSubmit }
    onBack      = { onBack }
    validations = { validations }
  />;
};

const mapStateToProps = (state) => {
  return {
    IDApp         : state.application.IDApp,
    DLApp         : state.application.DLApp,
    cardType      : state.application.cardType,
    seniorID      : state.application.IDApp.seniorID,
    licenseType   : state.application.DLApp.licenseType,
    focused       : state.ui.focus,
    validations   : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateLicenseType, Page);

