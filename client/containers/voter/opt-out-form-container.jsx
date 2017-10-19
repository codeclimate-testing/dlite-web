'use strict';

import React from 'react';

import { updateOptOut }               from '../../actions/index';
import Form                           from '../../presentations/voter/opt-out-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import * as dataPresent               from '../../helpers/data-present';

const ConnectedForm = (props) => {

    let value = props.optOut;
    const continueDisabled = !dataPresent.value(value);

    const NEW_VOTER = '/about-me/voter/voter-preferences-intro';
    const ALREADY_REGISTERED = '/about-me/voter/voter-preferences-intro-preregistered';
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

  return (
    <Form
      onSubmit={onSubmit}
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
