'use strict';

import React from 'react';

import { updateMailingAddress }  from "../actions/index";
import MailingAddress from "../presentations/mailing-address-form.jsx";
import connectForm      from '../helpers/connect-form';

const MailingAddressContainer = (props) => {
  return (
    <MailingAddress
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      mailingAddress={props.mailingAddress}
    />
  );
};

function mapStateToProps(state) {
  return {
    mailingAddress: state.application.mailingAddress
  };
}

export default connectForm(mapStateToProps, updateMailingAddress, MailingAddressContainer);
