'use strict';

import React from 'react';

import { updateBallotByMail }       from '../../actions/index';
import Form                         from '../../presentations/voter/ballot-by-mail-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import * as dataPresent             from '../../helpers/data-present';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {

  const YES_MESSAGE         = 'Ok, your ballot will now come by mail. You can still vote in-person at your polling place.';
  const YES_ADDRESS         = '/about-me/voter/ballot-language';
  const YES_FAQ_CLASSNAME   = 'faq-ballot-by-mail-yes';
  const NO_MESSAGE          = 'Ok, you vote in-person at your polling place.';
  const NO_ADDRESS          = '/about-me/voter/contact-choice';
  const NO_FAQ_CLASSNAME    = 'faq-ballot-by-mail-no';

  let address, faqDrawerClass, faqDrawerText;

  let continueDisabled = !(dataPresent.value(props.ballotByMail));

  if(props.ballotByMail === 'Yes'){
    address           = YES_ADDRESS
    faqDrawerClass    = YES_FAQ_CLASSNAME
    faqDrawerText     = YES_MESSAGE
  }

  if(props.ballotByMail === 'No'){
    address           = NO_ADDRESS
    faqDrawerClass    = NO_FAQ_CLASSNAME
    faqDrawerText     = NO_MESSAGE
  }

  const onSubmit = navigateOnSubmit(address, props);

  return (
    <Form
      onSubmit          = {onSubmit}
      onChange          = {props.onChange}
      selectedValue     = {props.ballotByMail}
      continueDisabled  = {continueDisabled}
      faqDrawerText     = {faqDrawerText}
      faqDrawerClass    = {faqDrawerClass}
    />
  );
};

function mapStateToProps(state) {
  return {
    ballotByMail: state.application.ballotByMail
  };
}

export default connectForm(mapStateToProps, updateBallotByMail, ConnectedForm);
