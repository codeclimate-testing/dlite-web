'use strict';


import React                   from 'react';
import { connect }             from 'react-redux';

import { updateBallotByMail }  from '../../actions/index';
import BallotByMailForm        from '../../presentations/voter-registration/ballot-by-mail/ballot-by-mail-form.jsx';
import BallotByMailFormPreReg  from '../../presentations/voter-registration/ballot-by-mail/ballot-by-mail-prereg-form.jsx';
import handlers                from '../../helpers/handlers';
import { hasValue } from '../../helpers/data/validations';
import * as dataPresent        from '../../helpers/data-present';
import { isPreregistering }    from '../../helpers/calculate-age';

import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/contact-methods', props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = !(dataPresent.value(props.ballotByMail));
  const formPageTitle   = pageTitle(props.dateOfBirth);
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
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateBallotByMail, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
