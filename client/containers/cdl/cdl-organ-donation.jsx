'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';

import handlers                       from '../../helpers/handlers';
import * as dataPresent               from '../../helpers/data-present';

import { updateCDLOrganDonation }     from '../../actions/index';
import { ageChecks }                  from '../../helpers/calculate-age';
import Presentation                   from '../../presentations/organ-donation/organ-donation-page.jsx';
import { OrganDonationValidator }     from '../../helpers/validations';

const Page = (props) => {
  let validations = new OrganDonationValidator(props.organDonation, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('cdlOrganDonation', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit     = { onSubmit }
      onBack       = { onBack }
      validations  = { validations }
    />
  );
}

function mapStateToProps(state) {
  return {
    organDonation:  state.cdl.organDonation,
    dateOfBirth:    state.cdl.basics.dateOfBirth,
    focused:        state.ui.focus,
    validations:    state.ui.validations,
    flow:           state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLOrganDonation, Page);
