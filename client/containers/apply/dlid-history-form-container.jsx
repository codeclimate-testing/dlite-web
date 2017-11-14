'use strict';

import React from 'react';

import { updateDlidHistory }               from "../../actions/index";
import HomeLink                            from '../../presentations/home-link.jsx';
import ContinueButton                      from '../../presentations/continue-button.jsx';
import DlidHistory                         from "../../presentations/apply/dlid-history-form.jsx";
import EnterDlidHistory                    from "../../presentations/apply/enter-dlid-history-form.jsx";
import connectForm                         from '../../helpers/connect-form';
import navigateOnSubmit                    from '../../helpers/navigate-on-submit';
import navigateOnBack                      from '../../helpers/navigate-on-back';
import * as dataPresent                    from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled         = !(dataPresent.dlidHistory(props.dlidHistory));
  let showEnterDLidHistory     = false;
  let onSubmit                 = navigateOnSubmit('/my-history/names-history/', props);
  let onBack                   = navigateOnBack('/my-basics/social-security', props);
  let pageTitle                = "DMV: License application - My history";

if(props.dlidHistory.isIssued === 'Yes') {
  showEnterDLidHistory  = false;
  continueDisabled = !(dataPresent.dlidHistory(props.dlidHistory));

  return (
      <div>
        <HomeLink />
        <h3>2 &raquo; My History</h3>
        <hr></hr>

   <form onSubmit={onSubmit}>
    <DlidHistory
        pageTitle      ={pageTitle}
        onChange       ={props.onChange}
        selectedValue  ={props.dlidHistory.isIssued}
    />
    <EnterDlidHistory
        onChange       ={props.onChange}
        dlidHistory    ={props.dlidHistory}
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
        <DlidHistory
          pageTitle     ={pageTitle}
          onChange      ={props.onChange}
          selectedValue ={props.dlidHistory.isIssued}
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
     dlidHistory: state.application.dlidHistory
    };
}

export default connectForm(mapStateToProps, updateDlidHistory, ConnectedForm);
