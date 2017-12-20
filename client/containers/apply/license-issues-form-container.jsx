'use strict';

import React from 'react';

import { updateLicenseIssues }             from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import NavigationButtons                   from '../../presentations/navigation-buttons.jsx';
import LicenseIssues                       from "../../presentations/apply/license-issues-form.jsx";
import EnterRevokedSuspended               from "../../presentations/apply/enter-revoked-suspended-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/handlers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/handlers/navigate-on-back';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = !(dataPresent.licenseIssues(props.licenseIssues));
  let showLicenseIssues                 = false;
  let onSubmit                          = navigateOnSubmit('/my-history/veterans-service', props);
  let onBack                            = navigateOnBack(props);

  if (props.licenseIssues.isSuspended === 'Yes') {
    showLicenseIssues  = false;
    continueDisabled = !(dataPresent.licenseIssues(props.licenseIssues));

    return (
      <div>
        <form onSubmit={onSubmit}>
          <LicenseIssues
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
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <LicenseIssues
          onChange      ={props.onChange}
          selectedValue ={props.licenseIssues.isSuspended}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack= {onBack}
        />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    licenseIssues: state.application.licenseIssues
  };
}

export default connectForm(mapStateToProps, updateLicenseIssues, ConnectedForm);
