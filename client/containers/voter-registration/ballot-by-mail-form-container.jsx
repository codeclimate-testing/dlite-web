'use strict';


import React                   from 'react';
import connectForm             from '../../helpers/connect-form';

import { updateBallotByMail }  from '../../actions/index';

import BallotByMailForm        from '../../presentations/voter-registration/ballot-by-mail/ballot-by-mail-form.jsx';
import BallotByMailFormPreReg  from '../../presentations/voter-registration/ballot-by-mail/ballot-by-mail-prereg-form.jsx';

import handlers                from '../../helpers/handlers';
import { hasValue }            from '../../helpers/data/validations';
import * as dataPresent        from '../../helpers/data-present';
import { isPreregistering }    from '../../helpers/calculate-age';

const Page = (props) => {
  let onSubmit            = handlers.navigateOnSubmit('/voting-registration/contact-methods', props);
  let onBack              = handlers.navigateOnBack(props);
  const continueDisabled  = !(dataPresent.value(props.ballotByMail));

  const Presentation = isPreregistering(props.dateOfBirth) ? BallotByMailFormPreReg : BallotByMailForm;

return (
    <Presentation
      {...props}
      onSubmit          = {onSubmit}
      onBack            = {onBack}
      selectedValue     = {props.ballotByMail}
      continueDisabled  = {continueDisabled} 
    />
  );
};

const mapStateToProps = (state) => {
  return {
    ballotByMail: state.application.ballotByMail,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateBallotByMail, Page);
