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
    let pageTitle          = 'DMV: License application - Voting registration'

    const NEW_VOTER = '/voting-registration/preferences';
    const ALREADY_REGISTERED = '/voting-registration/updating-preferences';
    const ELIGIBLE_YES_REGISTER_NO = '/summary';
    let address;

    if(props.optOut == "I am a new voter in California"){
      address = NEW_VOTER;
    } else if(props.optOut === "I am already registered to vote in California") {
      address = ALREADY_REGISTERED;
    } else {
      address = ELIGIBLE_YES_REGISTER_NO;
    };

     const onSubmit = navigateOnSubmit(address, props);
     const onBack = navigateOnBack('/voting-registration/eligibility', props);

  return (
    <Form
      pageTitle={pageTitle}
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.optOut}
      continueDisabled={continueDisabled}
    />

  );
};

function mapStateToProps(state) {
  return {
    optOut: state.application.optOut
  };
}

export default connectForm(mapStateToProps, updateOptOut, ConnectedForm);
