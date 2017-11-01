'use strict';

import React from 'react';

import { updateNamesHistory }           from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import ContinueButton                   from '../../presentations/continue-button.jsx';
import UsedPreviousNames                from '../../presentations/apply/used-previous-names.jsx';
import EnterPreviousNames               from '../../presentations/apply/enter-previous-names.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled  = !(dataPresent.hasPreviousNames(props.namesHistory))
  let showEnterPreviousNames = false
  let onSubmit          = navigateOnSubmit('/about-me/privilege-removed-history', props);

  if(props.namesHistory.hasUsedPreviousNames === 'Yes') {
    showEnterPreviousNames = true;
    continueDisabled  = !(dataPresent.namesHistory(props.namesHistory))

  return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
       <UsedPreviousNames
          onChange      = {props.onChange}
          selectedValue = {props.namesHistory.hasUsedPreviousNames}
        />
        <br></br>
        <EnterPreviousNames
          onChange      = {props.onChange}
          namesHistory  = {props.namesHistory}
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
        <UsedPreviousNames
          onChange      = {props.onChange}
          selectedValue = {props.namesHistory.hasUsedPreviousNames}
        />
        <ContinueButton disabled={continueDisabled} />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    namesHistory: state.application.namesHistory
  };
}

export default connectForm(mapStateToProps, updateNamesHistory, ConnectedForm);
