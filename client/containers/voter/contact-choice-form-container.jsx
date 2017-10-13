'use strict';

import React from 'react';

import { updateContactChoice }  from '../../actions/index';
import Form                   from '../../presentations/voter/contact-choice-form.jsx';
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {

    const YES = '/about-me/voter/email-phone';

    let address;
    let continueDisabled = false;

    if(props.contactChoice == 'Yes'){
      address = YES;
    }
    else {
      address = '/summary';
    }

     const onSubmit = navigateOnSubmit(address, props);

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
