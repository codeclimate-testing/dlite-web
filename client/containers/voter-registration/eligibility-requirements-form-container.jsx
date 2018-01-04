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

const Page = (props) => {
  
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
      {...props}
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
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateEligibilityRequirements, dispatch);
  const onSubmit   = handlers.onFormSubmit(dispatch);

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
