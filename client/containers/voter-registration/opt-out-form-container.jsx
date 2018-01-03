'use strict';

import React from 'react';
import { connect } from "react-redux";

import {
  updateOptOut
} from '../../actions/index';
import onInputChange           from '../../helpers/handlers/on-input-change';
import OptOutForm              from '../../presentations/voter-registration/opt-out/opt-out-form.jsx';
import PreregOptOutForm        from '../../presentations/voter-registration/opt-out/opt-out-prereg-form.jsx';
import * as dataPresent        from '../../helpers/data-present';
import handlers                from '../../helpers/handlers';
import { hasValue }            from '../../helpers/data/validations';
import {
  eligibleForOptOut, eligibleForOptOutExist
} from '../../helpers/data/voting';
import { isPreregistering 
} from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';


const Page = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  let address = '/summary';
  if (eligibleForOptOut(props)) {
    address = '/voting-registration/preferences';
  };
  if (eligibleForOptOutExist(props)) {
    address = '/voting-registration/preferences-updated';
  };
  
  let onSubmit           = handlers.navigateOnSubmit(address, props);
  let onBack             = handlers.navigateOnBack(props);
  const continueDisabled = !dataPresent.value(props.optOut);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreregOptOutForm : OptOutForm;

  return (
    <Presentation
      {...props}
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.optOut}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    optOut: state.application.optOut,
    dateOfBirth: state.application.dateOfBirth,
    focused: state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateOptOut, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onChange,
    onSubmit
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
