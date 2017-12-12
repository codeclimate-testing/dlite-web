'use strict';

import React from 'react';

import { updateOptOut }        from '../../actions/index';
import OptOutForm              from '../../presentations/voter/opt-out-form.jsx';
import PreregOptOutForm        from '../../presentations/voter/opt-out-prereg-form.jsx';
import connectForm             from '../../helpers/connect-form';
import navigateOnSubmit        from '../../helpers/navigate-on-submit';
import navigateOnBack          from '../../helpers/navigate-on-back';
import * as dataPresent        from '../../helpers/data-present';
import { getCurrentAge }       from '../../helpers/calculate-age';

const ConnectedForm = (props) => {

  let value = props.optOut;
  let content = [];
  let address;
  
  const continueDisabled = !dataPresent.value(value);

  const NEW_VOTER = '/voting-registration/preferences';
  const ELIGIBLE_YES_REGISTER_NO = '/summary';
  const ALREADY_REGISTERED = '/voting-registration/preferences-updated'

  if ((props.optOut == "I am eligible to vote, but do not want to pre-register to vote") || (props.optOut === "I am eligible to vote, but do not want to register to vote")) {
    address = ELIGIBLE_YES_REGISTER_NO;
  }
  else if
    (props.optOut == "I am already registered to vote in California") {
    address = ALREADY_REGISTERED;
  }
  else {
    address = NEW_VOTER;
  };

  const onSubmit = navigateOnSubmit(address, props);
  const onBack = navigateOnBack('/voting-registration/eligibility', props);

  if ((props.dateOfBirth.age >= 16) && (props.dateOfBirth.age <= 18)) {
    content.push(
      <PreregOptOutForm
        key='Pre-registration opt out'
        onSubmit={onSubmit}
        onBack={onBack}
        onChange={props.onChange}
        selectedValue={props.optOut}
        age={props.dateOfBirth.age}
        continueDisabled={continueDisabled}
      />
    );
  }
  else {
    content.push(
      <OptOutForm
        key='Opt out'
        onSubmit={onSubmit}
        onBack={onBack}
        onChange={props.onChange}
        selectedValue={props.optOut}
        age={props.dateOfBirth.age}
        continueDisabled={continueDisabled}
      />
    );
  }

  return (
    <div>{content}</div>
  );
};

function mapStateToProps(state) {
  return {
    optOut: state.application.optOut,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateOptOut, ConnectedForm);
