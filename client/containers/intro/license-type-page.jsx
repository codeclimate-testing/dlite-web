'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';

import { updateLicenseType }  from "../../actions/index";
import Presentation           from "../../presentations/intro/license-type-page.jsx";

import handlers               from '../../helpers/handlers';
import * as dataPresent       from '../../helpers/data-present';

import {
  eligibleForReducedFee
} from '../../helpers/data/reduced-fee';

const Page = (props) => {
  let address = '/get-started';
  if (eligibleForReducedFee(props)) {
    address = '/reduced-fee';
  };

  let onSubmit          = handlers.navigateOnSubmit(address, props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = !dataPresent.licenseType(props.licenseType);

  return <Presentation
    {...props}
    onSubmit={onSubmit}
    onBack={onBack}
    continueDisabled={continueDisabled}
  />;
};

const mapStateToProps = (state) => {
  return {
    cardType:     state.application.cardType,
    seniorID:     state.application.seniorID,
    licenseType:  state.application.licenseType
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateLicenseType, dispatch);
  const onSubmit   = handlers.onFormSubmit(dispatch);

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
