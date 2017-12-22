'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';

import handlers                 from '../../helpers/handlers';
import * as dataPresent         from '../../helpers/data-present';

import { updateLicenseIssues }  from '../../actions/index';
import Presentation             from '../../presentations/apply/license-issues-page.jsx';

const Page = (props) => {
  let continueDisabled    = !(dataPresent.licenseIssues(props.licenseIssues));
  let onSubmit            = handlers.navigateOnSubmit('/my-history/veterans-service', props);
  let onBack              = handlers.navigateOnBack(props);

  return (
    <Presentation 
      {...props}
      onSubmit            = { onSubmit }
      onBack              = { onBack }
      continueDisabled    = { continueDisabled }
    />
  );
}

function mapStateToProps(state) {
  return {
    licenseIssues:  state.application.licenseIssues,
    focused:        state.ui.focus
  };
};

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateLicenseIssues, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
