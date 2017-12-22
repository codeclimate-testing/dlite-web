'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';

import EnterIssues          from './license-issues/enter-revoked-suspended-form.jsx';
import LicenseIssues        from './license-issues/license-issues-form.jsx';

const LicenseIssuesPage = (props) => {
  return (
    <Page 
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = { props.onSubmit }>
        <LicenseIssues
          onChange      = { props.onChange }
          selectedValue = { props.licenseIssues.isSuspended }
        />

        <EnterIssues {...props} />

        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default LicenseIssuesPage;