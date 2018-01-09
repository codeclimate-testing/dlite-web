'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { CardTypeValidator }  from '../../helpers/validations';

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
  let validations       =   new CardTypeValidator(props.cardType, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('chooseCardType', props, validations);
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
      focus             = { focus }
    />
  );
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    cardAction:   state.application.cardAction,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardType, Page);