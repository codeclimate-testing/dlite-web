'use strict';

import React from 'react';

import { updateMailingAddress }     from "../../actions/index";
import Form                         from "../../presentations/apply/mailing-address-form.jsx";
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/handlers/navigate-on-submit';
import navigateOnBack               from '../../helpers/handlers/navigate-on-back';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/about-me/physical-traits/', props);
  let onBack            = navigateOnBack(props);
  let continueDisabled  = false;

  return (
    <Form
      onSubmit          = { onSubmit }
      onBack            = { onBack }
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
