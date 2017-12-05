'use strict';

import React from 'react';

import { updateOptOut }               from '../../actions/index';
import Form                           from '../../presentations/voter/opt-out-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import navigateOnBack                 from '../../helpers/navigate-on-back';
import * as dataPresent               from '../../helpers/data-present';

const ConnectedForm = (props) => {

  let value = props.optOut;
    const continueDisabled = !dataPresent.value(value);

    const NEW_VOTER = '/voting-registration/preferences';
    const ELIGIBLE_YES_REGISTER_NO = '/summary';
    let address;

    if((props.optOut == "I am eligible to vote, but do not want to pre-register to vote") || (props.optOut === "I am eligible to vote, but do not want to register to vote")){
      address = ELIGIBLE_YES_REGISTER_NO;
    } else {
      address = NEW_VOTER;
    };

     const onSubmit = navigateOnSubmit(address, props);
     const onBack = navigateOnBack('/voting-registration/eligibility', props);

  return (
    <Form
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.optOut}
      dateOfBirth={props.dateOfBirth}
      continueDisabled={continueDisabled}
    />

  );
};

function mapStateToProps(state) {
  return {
    optOut: state.application.optOut,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateOptOut, ConnectedForm);
