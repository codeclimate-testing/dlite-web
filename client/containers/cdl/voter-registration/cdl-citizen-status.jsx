'use strict';

import React                          from 'react';
import { updateCDLCitizenStatus }     from '../../../actions/index';
import Presentation                   from '../../../presentations/voter-registration/citizen-status-page.jsx';
import handlers                       from '../../../helpers/handlers';
import { mergePropsGenerator }        from '../../../helpers/merge-props';


const Page = (props) => {
  let validations       = { isValid: () => true };
  let onSubmit          = handlers.navigateOrShowErrors('cdlCitizenship', props, validations);
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
    citizenStatus       : state.cdl.voting.citizenStatus,
    dateOfBirth         : state.cdl.basics.dateOfBirth,
    cardAction          : state.cdl.cardAction,
    focused             : state.ui.focus,
    locale              : state.ui.locale
  };
};

export default mergePropsGenerator(mapStateToProps, updateCDLCitizenStatus, 'updateCitizenship', Page);
