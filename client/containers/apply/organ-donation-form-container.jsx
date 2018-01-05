'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';

import handlers                       from '../../helpers/handlers';
import * as dataPresent               from '../../helpers/data-present';

import { updateOrganDonation }        from '../../actions/index';
import { ageChecks }                  from '../../helpers/calculate-age';
import Presentation                   from '../../presentations/apply/organ-donation-page.jsx';

const Page = (props) => {

  let submitAddress = '/voting-registration/introduction';
  if(ageChecks.Under16(props.dateOfBirth)) {
    submitAddress = '/guardian-signature';
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
};

export default connectForm(mapStateToProps, updateOrganDonation, Page);