'use strict';

import React from 'react';

import { updateNamesHistory }           from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import NavigationButtons                from '../../presentations/navigation-buttons.jsx';
import Page                             from '../../presentations/page.jsx';
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
  let onBack                 = navigateOnBack('/my-history/license-and-id', props);
  let pageTitle              = "DMV: License application - My history";

  if(props.namesHistory.hasUsedPreviousNames === 'Yes') {
    showEnterPreviousNames = true;
    continueDisabled  = !(dataPresent.namesHistory(props.namesHistory))

  return (
    <Page
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
      <div>
        <form onSubmit={onSubmit}>
         <UsedPreviousNames
            pageTitle      ={pageTitle}
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
          <UsedPreviousNames
            pageTitle      ={pageTitle}
            onChange      = {props.onChange}
            selectedValue = {props.namesHistory.hasUsedPreviousNames}
          />
          <NavigationButtons
            continueDisabled={continueDisabled}
            onBack={onBack}
          />
        </form>
      </div>
    </Page>
  );
};

function mapStateToProps(state) {
  return {
    namesHistory: state.application.namesHistory
  };
}

export default connectForm(mapStateToProps, updateNamesHistory, ConnectedForm);
