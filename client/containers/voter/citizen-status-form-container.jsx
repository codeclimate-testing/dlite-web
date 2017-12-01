'use strict';

import React from 'react';

import { updateCitizenStatus }        from '../../actions/index';
import Form                           from '../../presentations/voter/citizen-status-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';

const ConnectedForm = (props) => {
  let value = props.citizenStatus;
  const continueDisabled = false;
  let onSubmit = navigateOnSubmit('/summary', props);
  let onBack = navigateOnBack('/voting-registration/introduction', props);

  if(value === 'Yes') {
    onSubmit = navigateOnSubmit('/voting-registration/eligibility', props);
  }

  return (
    <Form
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
    citizenStatus: state.application.citizenStatus
  };
}

export default connectForm(mapStateToProps, updateCitizenStatus, ConnectedForm);
