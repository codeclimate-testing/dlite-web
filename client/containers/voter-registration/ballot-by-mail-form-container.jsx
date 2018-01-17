'use strict';


import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import { updateBallotByMail }   from '../../actions/index';
import Presentation             from '../../presentations/voter-registration/ballot-by-mail-page.jsx';
import handlers                 from '../../helpers/handlers';
import { BallotByMailValidator }from '../../helpers/validations';
import { isPreregistering }     from '../../helpers/calculate-age';

const Page = (props) => {
  let validations       = new BallotByMailValidator(props.ballotByMail, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('/voting-registration/contact-methods', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  let focus             =   function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };

  let prereg = isPreregistering(props.dateOfBirth);

  return (
      <Presentation
        {...props}
        onSubmit          = {onSubmit}
        onBack            = {onBack}
        selectedValue     = {props.ballotByMail}
        onFocus           = {focus}
        validations       = {validations}
        prereg            = {prereg}
      />
    );
  };

const mapStateToProps = (state) => {
  return {
    ballotByMail: state.application.ballotByMail,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateBallotByMail, Page);
