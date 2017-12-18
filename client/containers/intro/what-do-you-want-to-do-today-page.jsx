'use strict';

import React from 'react';
import { connect } from "react-redux";

import Presentation           from "../../presentations/intro/choose-card-page.jsx";

import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import onInputChange          from '../../helpers/on-input-change';
import onFormSubmit           from '../../helpers/on-form-submit';

import {
  onFocusGenerator,
  onBlurGenerator
} from '../../helpers/on-focus-changes';

import {
  ageChecks,
  canBeSenior
} from '../../helpers/calculate-age';

import * as dataPresent       from '../../helpers/data-present';
import { updateCardType }     from "../../actions/index";

const Page = (props) => {
  let address = '/real-id';
  if(ageChecks.Under15Half(props.dateOfBirth) && props.cardType.DL) {
    address             =   '/youth-license-notification';
  } else if (canBeSenior(props.dateOfBirth)) {
    address             =   '/senior-id';
  }

  let onSubmit          =   navigateOnSubmit(address, props);
  let onBack            =   navigateOnBack(props);
  let continueDisabled  =   !(dataPresent.cardType(props.cardType));

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
  const onChange = onInputChange(updateCardType, dispatch);
  const onSubmit = onFormSubmit;
  const onBlur   = onBlurGenerator(dispatch);
  const onFocus  = onFocusGenerator(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
