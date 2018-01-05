'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import { updateCitizenStatus }  from '../../actions/index';
import CitizenStatusForm        from '../../presentations/voter-registration/citizen-status/citizen-status-form.jsx';
import PreRegCitizenStatusForm  from '../../presentations/voter-registration/citizen-status/citizen-status-prereg-form.jsx';
import handlers                 from '../../helpers/handlers';
import {
  eligibleForCitizen
} from '../../helpers/data/voting';
import { isPreregistering
} from '../../helpers/calculate-age';

const Page = (props) => {

  let address = '/summary';
  if(isPreregistering(props.dateOfBirth)){
    address = '/guardian-signature';
  }
  if (eligibleForCitizen(props)) {
    address = '/voting-registration/eligibility';
  };

  let onSubmit          = handlers.navigateOnSubmit(address, props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = false;

  const Presentation    = isPreregistering(props.dateOfBirth) ? PreRegCitizenStatusForm : CitizenStatusForm;

  return (
    <Presentation
      {...props}
      onSubmit          = {onSubmit}
      onBack            = {onBack}
      onChange          = {props.onChange}
      selectedValue     = {props.citizenStatus}
      continueDisabled  = {continueDisabled}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    citizenStatus       : state.application.citizenStatus,
    dateOfBirth         : state.application.dateOfBirth,
    focused             : state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateCitizenStatus, Page);