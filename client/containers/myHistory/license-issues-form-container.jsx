'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { LicenseIssuesValidator } from '../../helpers/validations';
import { updateLicenseIssues }  from '../../actions/index';
import Presentation             from '../../presentations/myHistory/license-issues-page.jsx';

const Page = (props) => {
  let validations       = new LicenseIssuesValidator(props.licenseIssues, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('licenseIssues', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation 
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
}

function mapStateToProps(state) {
  return {
    licenseIssues   : state.application.licenseIssues,
    focused         : state.ui.focus,
    validations     : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateLicenseIssues, Page);

