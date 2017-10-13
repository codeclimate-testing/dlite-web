'use strict';

import React from 'react';

import { updateContactChoice }  from '../../actions/index';
import Form                   from '../../presentations/voter/contact-choice-form.jsx';
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled = false;
  let onSubmit = navigateOnSubmit('/about-me/voter/voter-reg-complete', props);

  if(props.contactChoice == 'Yes'){
    onSubmit = navigateOnSubmit('/about-me/voter/email-phone', props);
  }
  else {
    onSubmit;
  }

  return (
    <Form
    onSubmit={onSubmit}
    onChange={props.onChange}
    selectedValue={props.contactChoice}
    continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    contactChoice: state.application.contactChoice
  };
}

export default connectForm(mapStateToProps, updateContactChoice, ConnectedForm);
