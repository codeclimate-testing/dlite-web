'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { LicenseIssuesValidator } from '../../helpers/validations';
import { updateLicenseIssues }  from '../../actions/index';
import Presentation             from '../../presentations/my-history/license-issues-page.jsx';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new LicenseIssuesValidator(Object.assign(props.licenseIssues, {locale}), props.validations);
  let onSubmit          = handlers.navigateOrShowErrors(props.addressName, props, validations);
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
    licenseIssues   : state.application.history.licenseIssues,
    focused         : state.ui.focus,
    validations     : state.ui.validations,
    locale          : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateLicenseIssues, Page);

