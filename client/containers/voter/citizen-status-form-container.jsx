'use strict';

import React from 'react';

import { updateCitizenStatus }        from '../../actions/index';
import CitizenStatusForm              from '../../presentations/voter/citizen-status-form.jsx';
import PreRegCitizenStatusForm        from '../../presentations/voter/citizen-status-prereg-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import navigateOnBack                 from '../../helpers/navigate-on-back';
import { isPreregistering}            from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  let content = [];
  let value = props.citizenStatus;
  const continueDisabled = false;
  let onSubmitAddress = '/summary';

  let onBack = navigateOnBack(props);

  if (value === 'Yes') {
    onSubmitAddress = '/voting-registration/eligibility';
  }

  let onSubmit = navigateOnSubmit(onSubmitAddress, props);

  if (isPreregistering(props.dateOfBirth)) {
    content.push(
      <PreRegCitizenStatusForm
        key='Voting pre-registration citizen status'
        onSubmit={onSubmit}
        onBack={onBack}
        onChange={props.onChange}
        selectedValue={props.citizenStatus}
        continueDisabled={continueDisabled} />
    );
  } else {
    content.push(
      <CitizenStatusForm key='Voting registration citizen status'
        onSubmit={onSubmit}
        onBack={onBack}
        onChange={props.onChange}
        selectedValue={props.citizenStatus}
        continueDisabled={continueDisabled} />
    );
  }

  return (
    <div>{content}</div>
  );
};

function mapStateToProps(state) {
  return {
    citizenStatus: state.application.citizenStatus,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateCitizenStatus, ConnectedForm);
