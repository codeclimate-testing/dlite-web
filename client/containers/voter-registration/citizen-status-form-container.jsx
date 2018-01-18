'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import { updateCitizenStatus }  from '../../actions/index';
import Presentation             from '../../presentations/voter-registration/citizen-status-page.jsx';
import handlers                 from '../../helpers/handlers';
import { checkPreReg }          from '../../helpers/data/youth';

const Page = (props) => {
  let validations       = [];
  let onSubmit          = handlers.navigateOrShowErrors('citizenship', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  let prereg = checkPreReg(props.dateOfBirth);

  return (
    <Presentation
      {...props}
      onSubmit          = {onSubmit}
      onBack            = {onBack}
      onChange          = {props.onChange}
      selectedValue     = {props.citizenStatus}
      prereg            = {prereg}
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