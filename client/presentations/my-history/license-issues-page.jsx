'use strict';

import React                        from 'react';
import NavigationButtons            from '../navigation-buttons.jsx';
import Page                         from '../../containers/page.jsx';
import EnterIssues                  from './license-issues/enter-revoked-suspended-form.jsx';
import LicenseIssues                from './license-issues/license-issues-form.jsx';
import { licenseIssuesIsSuspended } from '../../helpers/data/my-history';

const LicenseIssuesPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = { props.onSubmit }>
        <LicenseIssues
          {...props}
          selectedValue = { props.licenseIssues.isSuspended }
        />

        <EnterIssues
          {...props}
          showIf        = { licenseIssuesIsSuspended(props) }
        />

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default LicenseIssuesPage;
