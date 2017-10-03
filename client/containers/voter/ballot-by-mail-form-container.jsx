'use strict';

import React from 'react';

import { updateBallotByMail }       from '../../actions/index';
import Form                         from '../../presentations/voter/ballot-by-mail-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import * as dataPresent             from '../../helpers/data-present';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {

  const BALLOT_LANGUAGE_ADDRESS = '/about-me/voter/ballot-language';
  const CONTACT_CHOICE_ADDRESS  = '/about-me/voter/contact-choice';

  let address;
  let continueDisabled = !(dataPresent.value(props.ballotByMail));

  if(props.ballotByMail === 'Yes'){
    address = BALLOT_LANGUAGE_ADDRESS;
  }

  if(props.ballotByMail === 'No'){
    address = CONTACT_CHOICE_ADDRESS;
  }

  const onSubmit = navigateOnSubmit(address, props);

  return (
    <Form
      onSubmit          = {onSubmit}
      onChange          = {props.onChange}
      selectedValue     = {props.ballotByMail}
      continueDisabled  = {continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    ballotByMail: state.application.ballotByMail
  };
}

export default connectForm(mapStateToProps, updateBallotByMail, ConnectedForm);
