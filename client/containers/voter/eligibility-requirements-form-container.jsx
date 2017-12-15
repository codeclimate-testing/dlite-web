'use strict';

import React from 'react';

import { updateEligibilityRequirements } from '../../actions/index';
import EligibilityRequirements from '../../presentations/voter/eligibility-requirements-form.jsx';
import PreRegEligibilityRequirements from '../../presentations/voter/eligibility-requirements-prereg-form.jsx';
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
  let nextAddress = '/summary';
  let onBack = navigateOnBack(props);
  let content = [];

  if (props.eligibilityRequirements === 'Yes') {
    nextAddress = '/voting-registration/opt-out';
  }

  let onSubmit = navigateOnSubmit(nextAddress, props);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegEligibilityRequirements : EligibilityRequirements;
  return (
    <Presentation
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.eligibilityRequirements}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    eligibilityRequirements: state.application.eligibilityRequirements,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateEligibilityRequirements, ConnectedForm);
