'use strict';


import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import { updateBallotByMail }   from '../../actions/index';
import Presentation             from '../../presentations/voter-registration/ballot-by-mail-page.jsx';
import handlers                 from '../../helpers/handlers';
import { BallotByMailValidator }from '../../helpers/validations';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new BallotByMailValidator(Object.assign(props.ballotByMail, {locale}), props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('ballotByMail', props, validations);
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
    ballotByMail  : state.application.voting.ballotByMail,
    dateOfBirth   : state.application.basics.dateOfBirth,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    locale        : state.ui.locale,
    flow          : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateBallotByMail, Page);
