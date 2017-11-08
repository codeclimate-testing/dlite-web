'use strict';

import React from 'react';

import { updateDlidHistory }               from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import ContinueButton                      from '../../presentations/continue-button.jsx';
import DlidHistory                         from "../../presentations/apply/dlid-history-form.jsx";
import EnterDlidHistory                    from "../../presentations/apply/enter-dlid-history-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = !(dataPresent.dlidHistory(props.dlidHistory));
  let showEnterDLidHistory              = false;
  let onSubmit                          = navigateOnSubmit('/about-me/names-history/', props);

if(props.dlidHistory.isIssued === 'Yes') {
  showEnterDLidHistory  = false;
  continueDisabled = !(dataPresent.dlidHistory(props.dlidHistory));

  return (
      <div>
        <HomeLink />

   <form onSubmit={onSubmit}>
    <DlidHistory
        onChange                  ={props.onChange}
        selectedValue             ={props.dlidHistory.isIssued}
    />
    <EnterDlidHistory
        onChange                 = {props.onChange}
        dlidHistory              = {props.dlidHistory}
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
        <DlidHistory
          onChange      = {props.onChange}
          selectedValue = {props.dlidHistory.isIssued}
        />
        <ContinueButton disabled={continueDisabled} />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
     dlidHistory: state.application.dlidHistory
    };
}

export default connectForm(mapStateToProps, updateDlidHistory, ConnectedForm);
