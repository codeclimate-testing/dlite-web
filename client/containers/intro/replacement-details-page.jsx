'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';

import handlers               from '../../helpers/handlers';
import * as dataPresent       from '../../helpers/data-present';

import { updateCardReplacement }  from "../../actions/index";

import Presentation           from "../../presentations/intro/replacement-details-page.jsx";

const Page = (props) => {
  let address           =   '/real-id';
  let onSubmit          =   handlers.navigateOnSubmit(address, props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !dataPresent.cardReplacement(props.cardReplacement);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardReplacement.reason }
      continueDisabled  = { continueDisabled }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardReplacement     : state.application.cardReplacement,
    cardType            : state.application.cardType,
    cardAction          : state.application.cardAction,
    focused             : state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCardReplacement, dispatch);
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
