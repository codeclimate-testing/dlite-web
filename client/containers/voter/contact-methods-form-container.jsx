'use strict';

import React from 'react';

import { updateContactMethods }  from '../../actions/index';
import Form                   from '../../presentations/voter/contact-methods-form.jsx';
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {

    const ADD_OR_UPDATE = '/about-me/voter/email-phone';
    const REMOVE = '/about-me/voter/remove-email-phone';
    const SKIP_QUESTIONS = '/summary';

    let address;
    let continueDisabled = false;

    if(props.contactMethods == 'Add or Update'){
      address = ADD_OR_UPDATE;
    }

    else if(props.contactMethods == 'Remove'){
      address = REMOVE;
    }

    else {
      address = SKIP_QUESTIONS;
    }

     const onSubmit = navigateOnSubmit(address, props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.contactMethods}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    contactMethods: state.application.contactMethods
  };
}

export default connectForm(mapStateToProps, updateContactMethods, ConnectedForm);

