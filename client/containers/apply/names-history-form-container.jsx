'use strict';

import React                      from 'react';
import { updateNamesHistory }     from '../../actions/index';
import * as dataPresent           from '../../helpers/data-present';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/apply/names-history-page.jsx';

const ConnectedForm = (props) => {
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

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateNamesHistory, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
