'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

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

export default connectForm(mapStateToProps, updateLicenseIssues, Page);

