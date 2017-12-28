'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';

import handlers               from '../../helpers/handlers';
import * as dataPresent       from '../../helpers/data-present';

import { updateCardAction }   from "../../actions/index";
import Presentation           from "../../presentations/intro/what-do-you-want-to-do-today-page.jsx";

const Page = (props) => {
  
  let onSubmit          =   handlers.navigateOnSubmit('/select-id-dl', props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !dataPresent.value(props.cardAction);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardAction }
      continueDisabled  = { continueDisabled }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardAction:   state.application.cardAction,
    focused:      state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCardAction, dispatch);
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