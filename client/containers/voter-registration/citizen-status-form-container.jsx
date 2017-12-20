'use strict';

import React from 'react';

import { updateCitizenStatus } from '../../actions/index';
import CitizenStatusForm from '../../presentations/voter-registration/citizen-status-form.jsx';
import PreRegCitizenStatusForm from '../../presentations/voter-registration/citizen-status-prereg-form.jsx';
import connectForm from '../../helpers/connect-form';
import navigateOnSubmit from '../../helpers/handlers/navigate-on-submit';
import navigateOnBack from '../../helpers/handlers/navigate-on-back';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const ConnectedForm = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);
  let value = props.citizenStatus;
  const continueDisabled = false;
  let onSubmitAddress = '/summary';

  if (value === 'Yes') {
    onSubmitAddress = '/voting-registration/eligibility';
  }

  let onBack = navigateOnBack(props);
  let onSubmit = navigateOnSubmit(onSubmitAddress, props);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegCitizenStatusForm : CitizenStatusForm;

  return (
    <Presentation
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.citizenStatus}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    citizenStatus: state.application.citizenStatus,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateCitizenStatus, ConnectedForm);
