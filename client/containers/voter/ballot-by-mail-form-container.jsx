'use strict';

import React from 'react';

import { updateBallotByMail }       from '../../actions/index';
import BallotByMailForm             from '../../presentations/voter/ballot-by-mail-form.jsx';
import BallotByMailFormPreReg       from '../../presentations/voter/ballot-by-mail-prereg-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import * as dataPresent             from '../../helpers/data-present';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';
import { isPreregistering }         from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  const onSubmit = navigateOnSubmit('/voting-registration/contact-methods', props);
  const onBack = navigateOnBack('/voting-registration/language', props);
  let continueDisabled = !(dataPresent.value(props.ballotByMail));
  let content = [];

  if (isPreregistering(props.dateOfBirth)) {
      content.push(
      <BallotByMailFormPreReg
        key='Pre-registration Ballot by mail'
        onSubmit          = {onSubmit}
        onBack            = {onBack}
        onChange          = {props.onChange}
        selectedValue     = {props.ballotByMail}
        continueDisabled  = {continueDisabled}
        age               = {props.dateOfBirth.age}
      />
    );
  } else {
      content.push(
      <BallotByMailForm
        key='Ballot by mail'
        onSubmit          = {onSubmit}
        onBack            = {onBack}
        onChange          = {props.onChange}
        selectedValue     = {props.ballotByMail}
        continueDisabled  = {continueDisabled}
        age               = {props.dateOfBirth.age}
      />
    );
  }

  return (
    <div> {content} </div>
  );
};

function mapStateToProps(state) {
  return {
    ballotByMail: state.application.ballotByMail,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateBallotByMail, ConnectedForm);
