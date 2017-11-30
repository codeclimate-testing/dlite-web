'use strict';

import React from 'react';

import { updateLicenseIssues }             from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import NavigationButtons                   from '../../presentations/navigation-buttons.jsx';
import Page                                from '../../presentations/page.jsx';
import LicenseIssues                       from "../../presentations/apply/license-issues-form.jsx";
import EnterRevokedSuspended               from "../../presentations/apply/enter-revoked-suspended-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = !(dataPresent.licenseIssues(props.licenseIssues));
  let showLicenseIssues                 = false;
  let onSubmit                          = navigateOnSubmit('/my-history/veterans-service', props);
  let onBack                            = navigateOnBack('/my-history/names', props);
  let pageTitle                         = "DMV: License application - My history";

  if (props.licenseIssues.isSuspended === 'Yes') {
    showLicenseIssues  = false;
    continueDisabled = !(dataPresent.licenseIssues(props.licenseIssues));

    return (
      <Page
        sectionNumber='2'
        sectionName='My history'
        {...props}
      >
        <div>
          <form onSubmit={onSubmit}>
            <LicenseIssues
              pageTitle      ={pageTitle}
              onChange       ={props.onChange}
              selectedValue  ={props.licenseIssues.isSuspended}
            />
            <EnterRevokedSuspended
              onChange       ={props.onChange}
              licenseIssues  ={props.licenseIssues}
            />
            <NavigationButtons
              continueDisabled={continueDisabled}
              onBack= {onBack}
            />
          </form>
        </div>
      </Page>
    );
  }

  return (
    <Page
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
      <div>
        <form onSubmit={onSubmit}>
          <LicenseIssues
            pageTitle     ={pageTitle}
            onChange      ={props.onChange}
            selectedValue ={props.licenseIssues.isSuspended}
          />
          <NavigationButtons
            continueDisabled={continueDisabled}
            onBack= {onBack}
          />
        </form>
      </div>
    </Page>
  );
};

function mapStateToProps(state) {
  return {
    licenseIssues: state.application.licenseIssues
  };
}

export default connectForm(mapStateToProps, updateLicenseIssues, ConnectedForm);
