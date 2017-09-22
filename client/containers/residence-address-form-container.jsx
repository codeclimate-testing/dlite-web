'use strict';

import React from 'react';

import { updateResidenceAddress }   from "../actions/index";
import Form                         from "../presentations/residence-address-form.jsx";
import connectForm                  from '../helpers/connect-form';
import navigateOnSubmit             from '../helpers/navigate-on-submit';
import * as dataPresent             from '../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit = navigateOnSubmit('/about-me/is-mailing-same/', props);
  //Keep Continue button enabled by default
  let continueDisabled = false //!(dataPresent.address(props.residenceAddress));

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      residenceAddress={props.residenceAddress}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    residenceAddress: state.application.residenceAddress
  };
}

export default connectForm(mapStateToProps, updateResidenceAddress, ConnectedForm);
