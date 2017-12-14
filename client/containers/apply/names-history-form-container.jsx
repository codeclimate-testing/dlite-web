'use strict';

import React from 'react';

import { updateNamesHistory }           from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import NavigationButtons                from '../../presentations/navigation-buttons.jsx';
import UsedPreviousNames                from '../../presentations/apply/used-previous-names.jsx';
import EnterPreviousNames               from '../../presentations/apply/enter-previous-names.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import navigateOnBack                   from '../../helpers/navigate-on-back';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled       = !(dataPresent.hasPreviousNames(props.namesHistory))
  let showEnterPreviousNames = false
  let onSubmit               = navigateOnSubmit('/my-history/license-issues', props);
  let onBack                 = navigateOnBack(props);

  if(props.namesHistory.hasUsedPreviousNames === 'Yes') {
    showEnterPreviousNames = true;
    continueDisabled  = !(dataPresent.namesHistory(props.namesHistory))

  return (
    <div>
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
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
      </form>
    </div>
  );
}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <UsedPreviousNames
          onChange      = {props.onChange}
          selectedValue = {props.namesHistory.hasUsedPreviousNames}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
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
