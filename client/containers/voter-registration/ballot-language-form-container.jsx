'use strict';

import React from 'react';

import { updateBallotLanguage } from '../../actions/index';
import BallotLanguageForm from '../../presentations/voter-registration/ballot-language-form.jsx';
import BallotLanguageFormPreReg from '../../presentations/voter-registration/ballot-language-prereg-form.jsx';
import connectForm from '../../helpers/connect-form';
import navigateOnSubmit from '../../helpers/navigate-on-submit';
import navigateOnBack from '../../helpers/navigate-on-back';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const ConnectedForm = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);
  const continueDisabled = false;
  const onSubmit = navigateOnSubmit('/voting-registration/vote-by-mail', props);
  const onBack = navigateOnBack(props);

  const Presentation = isPreregistering(props.dateOfBirth) ? BallotLanguageFormPreReg : BallotLanguageForm;

  return (
    <Presentation
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.ballotLanguage}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    ballotLanguage: state.application.ballotLanguage,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateBallotLanguage, ConnectedForm);
