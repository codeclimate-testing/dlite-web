'use strict';


import React                    from 'react';
import connectForm              from '../../../helpers/connect-form';
import { updateCDLBallotByMail } from '../../../actions/index';
import Presentation             from '../../../presentations/voter-registration/ballot-by-mail-page.jsx';
import handlers                 from '../../../helpers/handlers';
import { BallotByMailValidator }from '../../../helpers/validations';

const Page = (props) => {
  let validations       = new BallotByMailValidator(props.ballotByMail, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlBallotByMail', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
      <Presentation
        {...props}
        onSubmit          = {onSubmit}
        onBack            = {onBack}
        selectedValue     = {props.ballotByMail}
        validations       = {validations}
      />
    );
  };

const mapStateToProps = (state) => {
  return {
    ballotByMail  : state.cdl.voting.ballotByMail,
    dateOfBirth   : state.cdl.basics.dateOfBirth,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    flow          : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLBallotByMail, Page);
