'use strict';

import React from 'react';
import { connect } from 'react-redux';

import handlers             from '../../helpers/handlers';
import * as dataPresent     from '../../helpers/data-present';

import { updateCardType }     from "../../actions/index";
import Presentation           from "../../presentations/intro/choose-card-page.jsx";

import {
  ageChecks,
  canBeSenior
} from '../../helpers/calculate-age';

const Page = (props) => {
  let address = '/real-id';
  if(ageChecks.Under15Half(props.dateOfBirth) && props.cardType.DL) {
    address = '/youth-license-notification';
  } else if (canBeSenior(props.dateOfBirth)) {
    address = '/senior-id';
  }

  let onSubmit          =   handlers.navigateOnSubmit(address, props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !dataPresent.cardType(props.cardType);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCardType, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
