'use strict';

import React from 'react';

import { updatePrivilegeRemovedHistory }   from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import ContinueButton                      from '../../presentations/continue-button.jsx';
import PrivilegeRemovedHistory             from "../../presentations/apply/privilege-removed-history-form.jsx";
import EnterRevokedSuspended               from "../../presentations/apply/enter-revoked-suspended-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = !(dataPresent.privilegeRemovedHistory(props.privilegeRemovedHistory));
  let showEnterRevokedSuspended         = false;
  let onSubmit                          = navigateOnSubmit('/about-me/organ-donation', props);
  let onBack                            = navigateOnBack('/my-history/names', props);
  let pageTitle                         = "DMV: License application - My history";

if(props.privilegeRemovedHistory.isSuspended === 'Yes') {
  showEnterRevokedSuspended  = false;
  continueDisabled = !(dataPresent.privilegeRemovedHistory(props.privilegeRemovedHistory));

  return (
      <div>
        <HomeLink />
        <h3>2 &raquo; My History</h3>
        <hr></hr>

   <form onSubmit={onSubmit}>
    <PrivilegeRemovedHistory
        pageTitle      ={pageTitle}
        onChange       ={props.onChange}
        selectedValue  ={props.privilegeRemovedHistory.isSuspended}
    />
    <EnterRevokedSuspended
        onChange                 ={props.onChange}
        privilegeRemovedHistory  ={props.privilegeRemovedHistory}
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
        <PrivilegeRemovedHistory
          pageTitle     ={pageTitle}
          onChange      ={props.onChange}
          selectedValue ={props.privilegeRemovedHistory.isSuspended}
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
     privilegeRemovedHistory: state.application.privilegeRemovedHistory
    };
}

export default connectForm(mapStateToProps, updatePrivilegeRemovedHistory, ConnectedForm);
