'use strict';

import React                          from 'react';
import { updateCitizenStatus }        from '../../actions/index';
import Presentation                   from '../../presentations/voter-registration/citizen-status-page.jsx';
import handlers                       from '../../helpers/handlers';
import { mergePropsGenerator }        from '../../helpers/merge-props';


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
    citizenStatus       : state.application.voting.citizenStatus,
    cardAction          : state.application.cardAction,
    dateOfBirth         : state.application.basics.dateOfBirth,
    focused             : state.ui.focus,
    locale              : state.ui.locale
  };
};

export default mergePropsGenerator(mapStateToProps, updateCitizenStatus, 'updateCitizenship', Page);