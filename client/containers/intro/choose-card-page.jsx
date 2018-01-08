'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

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
  } else if(props.cardAction === 'renew' || props.cardAction === 'change') {
    address = '/current-card-information';
  } else if(props.cardAction === 'replace') {
    address = '/replacement-details'
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
};

export default connectForm(mapStateToProps, updateCardType, Page);

