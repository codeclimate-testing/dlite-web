'use strict';

import React                          from 'react';
import { connect }                    from 'react-redux';
import { updateCitizenStatus }        from '../../actions/index';
import Presentation                   from '../../presentations/voter-registration/citizen-status-page.jsx';
import handlers                       from '../../helpers/handlers';
import { onSubmitUpdateCitizenship }  from '../../helpers/handlers/on-submit-dispatches';
import {
  mergePropsGenerator,
  onSubmitDispatches
} from '../../helpers/handlers/merge-props';


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
      selectedValue     = {props.application.citizenStatus}
    />
  );
};

const mapStateToProps = (state) => {
  return state;
};


let mergeProps = mergePropsGenerator(updateCitizenStatus, onSubmitDispatches.updateCitizenship);

export default connect(mapStateToProps, null, mergeProps)(Page);