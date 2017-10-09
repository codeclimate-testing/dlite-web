'use strict';

import React from 'react';

import { updateMailingAddress }     from "../../actions/index";
import Form                         from "../../presentations/motor/mailing-address-form.jsx";
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/about-me/sex/', props);
  let continueDisabled  = false;
  let pageTitle         = 'About me: Mailing address';
  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      mailingAddress    = { props.mailingAddress }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    mailingAddress: state.application.mailingAddress
  };
}

export default connectForm(mapStateToProps, updateMailingAddress, ConnectedForm);
