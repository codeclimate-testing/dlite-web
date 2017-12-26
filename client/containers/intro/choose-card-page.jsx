'use strict';

import React from 'react';
import { connect } from "react-redux";

import handlers               from '../../helpers/handlers';
import * as dataPresent       from '../../helpers/data-present';

import { updateCardType }     from "../../actions/index";
import Presentation           from "../../presentations/intro/choose-card-page.jsx";

import {
  getDL,
  canContinue
} from '../../helpers/data/card-type';

import {
  ageChecks,
  canBeSenior
} from '../../helpers/calculate-age';

const addressForProps = (props) => {
  let address = '/real-id';
  if(ageChecks.Under15Half(props.dateOfBirth) && getDL(props)) {
    address = '/youth-license-notification';
  } else if(dataPresent.value(props.cardType.renew) && props.cardAction === 'renew') {
    address = '/current-card-information';
  } else if(canBeSenior(props.dateOfBirth)) {
    address = '/senior-id';
  }
  return address;
};

const Page = (props) => {
  let onSubmit          =   handlers.navigateOnSubmit(addressForProps(props), props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !canContinue(props)

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
    cardAction:   state.application.cardAction,
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCardType, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
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
