'use strict';

import React from 'react';

import { updateEligibilityRequirements }   from '../../actions/index';
import Form                                from '../../presentations/voter/eligibility-requirements-form.jsx';
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  let onSubmit = navigateOnSubmit('/summary', props);
  let onBack = navigateOnBack('/voting-registration/citizenship', props);
  let pageTitle = 'DMV: License application - Voting registration'

  if(props.eligibilityRequirements === 'Yes') {
    onSubmit = navigateOnSubmit('/voting-registration/opt-out', props);
  } else {
    onSubmit;
  };

  return (
    <Form
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
    eligibilityRequirements: state.application.eligibilityRequirements
  };
}

export default connectForm(mapStateToProps, updateEligibilityRequirements, ConnectedForm);
