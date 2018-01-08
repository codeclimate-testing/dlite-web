'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';

import handlers               from '../../helpers/handlers';
import * as dataPresent       from '../../helpers/data-present';

import { updateCardChanges }  from "../../actions/index";
import { eligibleForSeniorID }from '../../helpers/data/senior';


import Presentation           from "../../presentations/intro/correct-or-update-page.jsx";

const Page = (props) => {
  let address           =   eligibleForSeniorID(props)? '/senior-id' : '/current-card-information';
  let onSubmit          =   handlers.navigateOnSubmit(address, props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   props.cardChanges.sections.includes('other') ? !dataPresent.value(props.cardChanges.other) : !dataPresent.cardChanges(props.cardChanges);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardChanges.correctOrUpdate }
      continueDisabled  = { continueDisabled }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardChanges         : state.application.cardChanges,
    cardType            : state.application.cardType,
    cardAction          : state.application.cardAction,
    dateOfBirth         : state.application.dateOfBirth,
    focused             : state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCardChanges, dispatch);
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
