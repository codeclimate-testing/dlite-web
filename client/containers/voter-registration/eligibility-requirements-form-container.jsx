'use strict';

import React                             from 'react';
import { connect }                       from 'react-redux';

import { updateEligibilityRequirements } from '../../actions/index';
import EligibilityRequirements           from '../../presentations/voter-registration/eligibility-requirements/eligibility-requirements-form.jsx';
import PreRegEligibilityRequirements     from '../../presentations/voter-registration/eligibility-requirements/eligibility-requirements-prereg-form.jsx';
import handlers                          from '../../helpers/handlers';
import {
   eligibileForRequirements
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
  if (eligibileForRequirements(props)) {
    address = '/voting-registration/opt-out';
  };

  let onSubmit          = handlers.navigateOnSubmit(address, props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = false;

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

const mapStateToProps = (state) => {
  return {
    eligibilityRequirements: state.application.eligibilityRequirements,
    dateOfBirth:  state.application.dateOfBirth
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateEligibilityRequirements, dispatch);
  const onSubmit   = handlers.onFormSubmit;

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
