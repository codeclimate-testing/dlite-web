'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import * as dataPresent           from '../../helpers/data-present';
import { YouthDLValidator }       from '../../helpers/validations';

import Presentation               from '../../presentations/intro/youth-license-notification-page.jsx';
import { updateCardType }         from '../../actions/index';
import { getDL }                  from '../../helpers/data/card-type';
import { ageChecks }              from '../../helpers/calculate-age';

const Page = (props) => {
  let validations         = new YouthDLValidator(props.cardType.youthIDInstead, props.validations);
  const continueDisabled  = ageChecks.Under15(props.dateOfBirth) ? props.cardType.youthIDInstead !== 'Yes' : false;
  let onSubmit            = handlers.navigateOrShowErrors('youthIDInstead', props, validations);
  const onBack            = handlers.navigateOnBack(props);
  
  let focus               =   function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };

  const selectedValue     = props.cardType.youthIDInstead === 'Yes' && getDL(props) ? 'No' : props.cardType.youthIDInstead;

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { selectedValue }
      continueDisabled  = { continueDisabled }
      validations       = { validations }
      onFocus           = { focus }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardType, Page);