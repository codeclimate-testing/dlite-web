'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';

import handlers                       from '../../helpers/handlers';
import * as dataPresent               from '../../helpers/data-present';

import { updateOrganDonation }        from '../../actions/index';
import { ageChecks }                  from '../../helpers/calculate-age';
import Presentation                   from '../../presentations/organDonation/organ-donation-page.jsx';
import { OrganDonationValidator }     from '../../helpers/validations';

const Page = (props) => {
  let validations = new OrganDonationValidator(props.organDonation, props.validations);
  let onSubmit = handlers.navigateOrShowErrors('organDonation', props, validations);
  let onBack   = handlers.navigateOnBack(props, validations);

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
    organDonation:  state.application.organDonation,
    dateOfBirth:    state.application.dateOfBirth,
    focused:        state.ui.focus,
    validations:    state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateOrganDonation, Page);
