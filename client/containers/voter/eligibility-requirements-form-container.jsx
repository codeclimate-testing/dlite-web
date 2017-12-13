'use strict';

import React from 'react';

import { updateEligibilityRequirements }   from '../../actions/index';
import EligibilityRequirements             from '../../presentations/voter/eligibility-requirements-form.jsx';
import PreRegEligibilityRequirements       from '../../presentations/voter/eligibility-requirements-prereg-form.jsx';
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';
import { isPreregistering }                from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  let nextAddress = '/summary';
  let onBack = navigateOnBack('/voting-registration/citizenship', props);
  let content = [];

  if(props.eligibilityRequirements === 'Yes') {
    nextAddress = '/voting-registration/opt-out';
  }

  let onSubmit = navigateOnSubmit(nextAddress, props);

  if (isPreregistering(props.dateOfBirth)) {
    content.push(
      <PreRegEligibilityRequirements
      key='Pre-registration Eligibility requirements'
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.eligibilityRequirements}
      continueDisabled={continueDisabled}
      />
    );
  } else {
    content.push(
      <EligibilityRequirements
        key='Eligibility requirements'
        onSubmit={onSubmit}
        onBack={onBack}
        onChange={props.onChange}
        selectedValue={props.eligibilityRequirements}
        continueDisabled={continueDisabled}/>
    );
  }

  return (
    <div>{content}</div>
  );
};

function mapStateToProps(state) {
  return {
    eligibilityRequirements: state.application.eligibilityRequirements,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateEligibilityRequirements, ConnectedForm);
