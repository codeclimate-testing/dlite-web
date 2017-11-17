'use strict';

import React from 'react';

import { updateBallotByMail }       from '../../actions/index';
import Form                         from '../../presentations/voter/ballot-by-mail-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import * as dataPresent             from '../../helpers/data-present';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';

const ConnectedForm = (props) => {

  const onSubmit = navigateOnSubmit('/voting-registration/contact-methods', props);
  const onBack = navigateOnBack('/voting-registration/language', props);
  let continueDisabled = !(dataPresent.value(props.ballotByMail));
  let pageTitle         =   'DMV: License application - Voting registration'

  return (
    <Form
      pageTitle         = {pageTitle}
      onSubmit          = {onSubmit}
      onBack            = {onBack}
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
