'use strict';

import React from 'react';

import { updateBallotByMail } from '../../actions/index';
import BallotByMailForm from '../../presentations/voter-registration/ballot-by-mail-form.jsx';
import BallotByMailFormPreReg from '../../presentations/voter-registration/ballot-by-mail-prereg-form.jsx';
import connectForm from '../../helpers/connect-form';
import { hasValue } from '../../helpers/data/validations';
import navigateOnSubmit from '../../helpers/handlers/navigate-on-submit';
import navigateOnBack from '../../helpers/handlers/navigate-on-back';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const ConnectedForm = (props) => {
  const onSubmit = navigateOnSubmit('/voting-registration/contact-methods', props);
  const onBack = navigateOnBack(props);
  let continueDisabled = !(hasValue(props.ballotByMail));

  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? BallotByMailFormPreReg : BallotByMailForm;

  return <Presentation

    pageTitle         = {formPageTitle}
    sectionName       = {formSectionName}
    onSubmit          = {onSubmit}
    onBack            = {onBack}
    onChange          = {props.onChange}
    selectedValue     = {props.ballotByMail}
    continueDisabled  = {continueDisabled}

  />
};

function mapStateToProps(state) {
  return {
    ballotByMail: state.application.ballotByMail,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateBallotByMail, ConnectedForm);
