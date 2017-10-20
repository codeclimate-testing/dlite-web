'use strict';

import React from 'react';

import { updateCitizenStatus }        from '../../actions/index';
import Form                           from '../../presentations/voter/citizen-status-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {
let value = props.citizenStatus;
  const continueDisabled = false;
  let onSubmit = navigateOnSubmit('/summary', props);

  if(value === 'Yes') {
    onSubmit = navigateOnSubmit('/about-me/voter/eligibility-requirements', props);
  }

  return (
    <Form
      onSubmit={onSubmit}
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
