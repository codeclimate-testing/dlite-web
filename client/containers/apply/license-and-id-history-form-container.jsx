'use strict';

import React from 'react';

import { updateLicenseAndIdHistory }       from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import ContinueButton                      from '../../presentations/continue-button.jsx';
import LicenseAndIdHistory                 from "../../presentations/apply/license-and-id-history-form.jsx";
import EnterLicenseAndIdHistory            from "../../presentations/apply/enter-license-and-id-history-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled         = !(dataPresent.licenseAndIdHistory(props.licenseAndIdHistory));
  let showLicenseAndIdHistory  = false;
  let onSubmit                 = navigateOnSubmit('/my-history/names/', props);
  let onBack                   = navigateOnBack('/my-basics/social-security', props);
  let pageTitle                = "DMV: License application - My history";

if(props.licenseAndIdHistory.isIssued === 'Yes') {
  showLicenseAndIdHistory  = false;
  continueDisabled = !(dataPresent.licenseAndIdHistory(props.licenseAndIdHistory));

  return (
      <div>
        <HomeLink />
        <h3>2 &raquo; My History</h3>
        <hr></hr>

   <form onSubmit={onSubmit}>
    <LicenseAndIdHistory
        pageTitle      ={pageTitle}
        onChange       ={props.onChange}
        selectedValue  ={props.licenseAndIdHistory.isIssued}
    />
    <EnterLicenseAndIdHistory
        onChange               ={props.onChange}
        licenseAndIdHistory    ={props.licenseAndIdHistory}
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
        <LicenseAndIdHistory
          pageTitle     ={pageTitle}
          onChange      ={props.onChange}
          selectedValue ={props.licenseAndIdHistory.isIssued}
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
     licenseAndIdHistory: state.application.licenseAndIdHistory
    };
}

export default connectForm(mapStateToProps, updateLicenseAndIdHistory, ConnectedForm);
