'use strict';

import React from 'react';

import { updateHomeAddress }   from "../actions/index";
import Form                         from "../presentations/home-address-form.jsx";
import connectForm                  from '../helpers/connect-form';
import navigateOnSubmit             from '../helpers/navigate-on-submit';
import * as dataPresent             from '../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit = navigateOnSubmit('/about-me/is-mailing-same/', props);
  //Keep Continue button enabled by default
  let continueDisabled = false //!(dataPresent.address(props.homeAddress));

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      homeAddress={props.homeAddress}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    homeAddress: state.application.homeAddress
  };
}

export default connectForm(mapStateToProps, updateHomeAddress, ConnectedForm);
