'use strict';

import React from 'react';

import { updatePrivilegeRemovedHistory }   from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import ContinueButton                      from '../../presentations/continue-button.jsx';
import PrivilegeRemovedHistory             from "../../presentations/apply/privilege-removed-history-form.jsx";
import EnterRevokedSuspended               from "../../presentations/apply/enter-revoked-suspended-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = !(dataPresent.privilegeRemovedHistory(props.privilegeRemovedHistory));
  let showEnterRevokedSuspended         = false;
  let onSubmit                          = navigateOnSubmit('/about-me/organ-donation', props);

if(props.privilegeRemovedHistory.isSuspended === 'Yes') {
  showEnterRevokedSuspended  = false;
  continueDisabled = !(dataPresent.privilegeRemovedHistory(props.privilegeRemovedHistory));

  return (
      <div>
        <HomeLink />

   <form onSubmit={onSubmit}>
    <PrivilegeRemovedHistory
        onChange                  ={props.onChange}
        selectedValue             ={props.privilegeRemovedHistory.isSuspended}
    />
    <EnterRevokedSuspended
        onChange                 = {props.onChange}
        privilegeRemovedHistory  = {props.privilegeRemovedHistory}
     />
        <ContinueButton disabled={continueDisabled} />
        </form>
      </div>
    );
  }

return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
        <PrivilegeRemovedHistory
          onChange      = {props.onChange}
          selectedValue = {props.privilegeRemovedHistory.isSuspended}
        />
        <ContinueButton disabled={continueDisabled} />
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
