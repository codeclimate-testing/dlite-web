'use strict';

import React from 'react';

import { updateContactDetails }  from "../actions/index";
import ContactDetails from "../presentations/contact-details-form.jsx";
import connectForm      from '../helpers/connect-form';

const ContactDetailsContainer = (props) => {
  return (
    <ContactDetails
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      contactDetails={props.contactDetails}
    />
  );
};

function mapStateToProps(state) {
  return {
    contactDetails: state.application.contactDetails
  };
}

export default connectForm(mapStateToProps, updateContactDetails, ContactDetailsContainer);
