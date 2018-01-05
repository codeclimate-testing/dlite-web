'use strict';

import React                      from 'react';
import { updateNamesHistory }     from '../../actions/index';
import * as dataPresent           from '../../helpers/data-present';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/apply/names-history-page.jsx';

const Page = (props) => {
  let continueDisabled       = !(dataPresent.hasPreviousNames(props.namesHistory))
  let showEnterPreviousNames = false
  let onSubmit               = handlers.navigateOnSubmit('/my-history/license-issues', props);
  let onBack                 = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    namesHistory: state.application.namesHistory,
    focused: state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateNamesHistory, Page);

