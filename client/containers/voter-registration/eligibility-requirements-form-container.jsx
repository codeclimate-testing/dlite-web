'use strict';

import React                             from 'react';
import connectForm                       from '../../helpers/connect-form';

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
  if(isPreregistering(props.dateOfBirth)){
    address = '/guardian-signature';
  }
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

export default connectForm(mapStateToProps, updateEligibilityRequirements, Page);