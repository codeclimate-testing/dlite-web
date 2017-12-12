'use strict';

import React from 'react';

import { updateEligibilityRequirements }   from '../../actions/index';
import EligibilityRequirements             from '../../presentations/voter/eligibility-requirements-form.jsx';
import PreRegEligibilityRequirements       from '../../presentations/voter/eligibility-requirements-prereg-form.jsx';
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';
import { getCurrentAge }                   from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  let onSubmit = navigateOnSubmit('/summary', props);
  let onBack = navigateOnBack('/voting-registration/citizenship', props);
  let content = [];
  
  if(props.eligibilityRequirements === 'Yes') {
    onSubmit = navigateOnSubmit('/voting-registration/opt-out', props)} 
    else {
    onSubmit;
  };

  if ((props.dateOfBirth.age >= 16 ) && (props.dateOfBirth.age <= 18)) {
    content.push(
      <PreRegEligibilityRequirements
      key='Pre-registration Eligibility requirements'
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.eligibilityRequirements}
      age={props.dateOfBirth.age}
      continueDisabled={continueDisabled}
      />
    );
  }
  else {
    content.push(
      <EligibilityRequirements
      key='Eligibility requirements'
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.eligibilityRequirements}
      age={props.dateOfBirth.age}
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
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateEligibilityRequirements, ConnectedForm);
