'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import { updateCitizenStatus }  from '../../actions/index';
import Presentation             from '../../presentations/voter-registration/citizen-status-page.jsx';
import handlers                 from '../../helpers/handlers';

const Page = (props) => {
  let validations       = {
    isValid: () => true
  };
  let onSubmit          = handlers.navigateOrShowErrors('citizenship', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = {onSubmit}
      onBack            = {onBack}
      onChange          = {props.onChange}
      selectedValue     = {props.citizenStatus}
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