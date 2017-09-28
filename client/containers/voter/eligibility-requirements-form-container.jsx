'use strict';

import React from 'react';

import { updateEligibilityRequirements }   from '../../actions/index';
import Form                           from '../../presentations/voter/eligibility-requirements-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {
  console.log(props);
  const continueDisabled = false;
  let value = props.eligibilityRequirements;
  let onSubmit = navigateOnSubmit('/summary', props);

  if(value === 'Yes' || value === 'No') {
    onSubmit = navigateOnSubmit('/about-me/voter/opt-out', props);
  } else {
    onSubmit;
  };

  return (
    <Form
      onSubmit={onSubmit}
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
