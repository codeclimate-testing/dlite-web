'use strict';

import React                   from 'react';
import { connect }             from 'react-redux';

import { updateCitizenStatus } from '../../actions/index';
import CitizenStatusForm       from '../../presentations/voter-registration/citizen-status/citizen-status-form.jsx';
import PreRegCitizenStatusForm from '../../presentations/voter-registration/citizen-status/citizen-status-prereg-form.jsx';
import handlers                from '../../helpers/handlers';
import {
  eligibleForCitizen
} from '../../helpers/data/voting';
import { isPreregistering 
} from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';


const Page = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);
  
  let address = '/summary';
  if (eligibleForCitizen(props)) {
    address = '/voting-registration/eligibility';
  };

  let onSubmit          = handlers.navigateOnSubmit(address, props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = false;

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

const mapStateToProps = (state) => {
  return {
    citizenStatus: state.application.citizenStatus,
    dateOfBirth:  state.application.dateOfBirth
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateCitizenStatus, dispatch);
  const onSubmit   = handlers.onFormSubmit;

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
