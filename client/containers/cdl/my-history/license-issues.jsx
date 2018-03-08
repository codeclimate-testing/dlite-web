'use strict';

import React                    from 'react';
import connectForm              from '../../../helpers/connect-form';
import handlers                 from '../../../helpers/handlers';
import { LicenseIssuesValidator } from '../../../helpers/validations';
import { updateCDLLicenseIssues }  from '../../../actions/index';
import Presentation             from '../../../presentations/cdl/my-history/license-issues-page.jsx';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new LicenseIssuesValidator(Object.assign(props.licenseIssues, {locale}), props.validations);
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
    locale          : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCDLLicenseIssues, Page);

