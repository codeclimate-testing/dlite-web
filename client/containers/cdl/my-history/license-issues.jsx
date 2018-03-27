'use strict';

import React                    from 'react';
import connectForm              from '../../../helpers/connect-form';
import handlers                 from '../../../helpers/handlers';
import { LicenseIssuesValidator } from '../../../helpers/validations';
import { updateCDLLicenseIssues }  from '../../../actions/index';
import Presentation             from '../../../presentations/cdl/my-history/license-issues-page.jsx';

const Page = (props) => {
  let validations       = new LicenseIssuesValidator(props.licenseIssues, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlLicenseIssues', props, validations);
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
    licenseIssues   : state.cdl.history.licenseIssues,
    focused         : state.ui.focus,
    validations     : state.ui.validations,
    flow            : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLLicenseIssues, Page);

