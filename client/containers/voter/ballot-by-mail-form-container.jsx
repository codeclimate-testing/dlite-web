'use strict';

import React from 'react';

import { updateBallotByMail }       from '../../actions/index';
import Form                         from '../../presentations/voter/ballot-by-mail-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import * as dataPresent             from '../../helpers/data-present';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {

  const onSubmit = navigateOnSubmit('/about-me/voter/political-contact', props);
  let continueDisabled = !(dataPresent.value(props.ballotByMail));

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
