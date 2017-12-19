'use strict';

import React from 'react';
import { connect } from "react-redux";

import {
  updateCardType
} from '../../actions/index';

import onInputChange                  from '../../helpers/on-input-change';
import onFormSubmit                   from '../../helpers/on-form-submit';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import navigateOnBack                 from '../../helpers/navigate-on-back';
import * as dataPresent               from '../../helpers/data-present';
import { ageChecks }                  from '../../helpers/calculate-age';

import Presentation                   from '../../presentations/intro/youth-license-notification-page.jsx';

const Form = (props) => {
  const continueDisabled  = ageChecks.Under15(props.dateOfBirth) ? props.cardType.youthIDInstead !== 'Yes' : false;
  const onSubmit          = navigateOnSubmit('/real-id', props);
  const onBack            = navigateOnBack(props);
  const selectedValue     = props.cardType.youthIDInstead === 'Yes' && props.cardType.DL ? 'No' : props.cardType.youthIDInstead;

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      selectedValue={ selectedValue }
      continueDisabled={continueDisabled}
    />
  )
};

function mapStateToProps(state) {
  return {
    cardType:    state.application.cardType,
    dateOfBirth: state.application.dateOfBirth
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = onInputChange(updateCardType, dispatch);
  const onSubmit = onFormSubmit;

  return {
    onSubmit,
    onChange
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
