'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';

import handlers               from '../../helpers/handlers';
import { hasValue }           from '../../helpers/data/validations';

import { updateCardType }     from "../../actions/index";

import Presentation           from "../../presentations/intro/correct-or-update-page.jsx";

const Page = (props) => {
  let onSubmit          =   handlers.navigateOnSubmit('/real-id', props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !hasValue(props.cardType.correctOrUpdate);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardType.correctOrUpdate }
      continueDisabled  = { continueDisabled }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardAction:   state.application.cardAction,
    cardType:     state.application.cardType,
    focused:      state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCardType, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
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
