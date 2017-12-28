'use strict';

import React                      from 'react';
import { connect }                from 'react-redux';

import handlers                   from '../../helpers/handlers';
import * as dataPresent           from '../../helpers/data-present';

import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/intro/current-card-page.jsx';

const Page = (props) => {
  let continueDisabled  = !(dataPresent.currentCardInfo(props.currentCardInfo));
  let onSubmit          = handlers.navigateOnSubmit('/real-id', props);
  let onBack            = handlers.navigateOnBack(props);

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
    currentCardInfo:  state.application.currentCardInfo,
    cardType:         state.application.cardType
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCurrentCardInfo, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
