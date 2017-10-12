'use strict';

import React                      from 'react';

import { updateContactDetails }   from "../../actions/index";
import Form                       from "../../presentations/voter/contact-details-form.jsx";
import connectForm                from '../../helpers/connect-form';
import * as dataPresent           from '../../helpers/data-present';
import navigateOnSubmit           from '../../helpers/navigate-on-submit';

const ContactDetailsForm = (props) => {

  let continueDisabled = !(dataPresent.contactDetails(props.contactDetails));
  const onSubmit = navigateOnSubmit('/about-me/voter/voter-reg-complete', props);


  return (
    <Form
      onSubmit          = {onSubmit}
      onChange          = {props.onChange}
      contactDetails    = {props.contactDetails}
      continueDisabled  = {continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    contactDetails: state.application.contactDetails
  };
}

export default connectForm(mapStateToProps, updateContactDetails, ContactDetailsForm);
