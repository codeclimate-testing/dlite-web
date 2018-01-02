'use strict';

import React                          from 'react';
import { connect }                    from 'react-redux';

import handlers                       from '../../helpers/handlers';
import * as dataPresent               from '../../helpers/data-present';

import { updateOrganDonation }        from '../../actions/index';
import { ageChecks }                  from '../../helpers/calculate-age';
import Presentation                   from '../../presentations/apply/organ-donation-page.jsx';

const Page = (props) => {

  let submitAddress = '/voting-registration/introduction';
  if(ageChecks.Under16(props.dateOfBirth)) {
    submitAddress = '/summary';
  }
  let onSubmit            = handlers.navigateOnSubmit(submitAddress, props);
  let onBack              = handlers.navigateOnBack(props);

  const continueDisabled = !dataPresent.organDonation(props.organDonation);
  return (
    <Presentation
      {...props}
      onSubmit            = { onSubmit }
      onBack              = { onBack }
      continueDisabled    = { continueDisabled }
    />
  );
}

function mapStateToProps(state) {
  return {
    organDonation:  state.application.organDonation,
    dateOfBirth:    state.application.dateOfBirth,
    focused:        state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateOrganDonation, dispatch);
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
