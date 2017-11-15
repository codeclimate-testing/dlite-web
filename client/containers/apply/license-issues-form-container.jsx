'use strict';

import React from 'react';

import { updateLicenseIssues }             from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import ContinueButton                      from '../../presentations/continue-button.jsx';
import LicenseIssues                       from "../../presentations/apply/license-issues-form.jsx";
import EnterRevokedSuspended               from "../../presentations/apply/enter-revoked-suspended-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = !(dataPresent.licenseIssues(props.licenseIssues));
  let showLicenseIssues                 = false;
  let onSubmit                          = navigateOnSubmit('/about-me/organ-donation', props);
  let onBack                            = navigateOnBack('/my-history/names', props);
  let pageTitle                         = "DMV: License application - My history";

if(props.licenseIssues.isSuspended === 'Yes') {
  showLicenseIssues  = false;
  continueDisabled = !(dataPresent.licenseIssues(props.licenseIssues));

  return (
      <div>
        <HomeLink />
        <h3>2 &raquo; My History</h3>
        <hr></hr>

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
        <ContinueButton disabled={continueDisabled} />
        <br></br>
        <button type="button" onClick={onBack}>Back</button>
        </form>
      </div>
    );
  }

return (
    <div>
      <HomeLink />
        <h3>2 &raquo; My History</h3>
        <hr></hr>

      <form onSubmit={onSubmit}>
        <LicenseIssues
          pageTitle     ={pageTitle}
          onChange      ={props.onChange}
          selectedValue ={props.licenseIssues.isSuspended}
        />
        <ContinueButton disabled={continueDisabled} />
        <br></br>
        <button type="button" onClick={onBack}>Back</button>
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
