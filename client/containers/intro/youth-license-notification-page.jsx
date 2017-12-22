'use strict';

import React                from 'react';
import { connect }          from 'react-redux';

import handlers             from '../../helpers/handlers';
import * as dataPresent     from '../../helpers/data-present';

import Presentation         from '../../presentations/intro/youth-license-notification-page.jsx';
import { updateCardType }   from '../../actions/index';

import { ageChecks }        from '../../helpers/calculate-age';

const Page = (props) => {
  const continueDisabled  = ageChecks.Under15(props.dateOfBirth) ? props.cardType.youthIDInstead !== 'Yes' : false;
  const onSubmit          = handlers.navigateOnSubmit('/real-id', props);
  const onBack            = handlers.navigateOnBack(props);
  const selectedValue     = props.cardType.youthIDInstead === 'Yes' && props.cardType.DL ? 'No' : props.cardType.youthIDInstead;

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      selectedValue={selectedValue}
      continueDisabled={continueDisabled}
    />
  )
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus 
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateCardType, dispatch);
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
