'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';

import handlers                       from '../../helpers/handlers';
import * as dataPresent               from '../../helpers/data-present';

import { updateOrganDonation }        from '../../actions/index';
import { ageChecks }                  from '../../helpers/calculate-age';
import Presentation                   from '../../presentations/organ-donation/organ-donation-page.jsx';
import { OrganDonationValidator }     from '../../helpers/validations';

const Page = (props) => {
  let locale      = props.locale;
  let validations = new OrganDonationValidator(Object.assign(props.organDonation, {locale}), props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('organDonation', props, validations);
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
    organDonation   : state.application.organDonation,
    dateOfBirth     : state.application.basics.dateOfBirth,
    focused         : state.ui.focus,
    validations     : state.ui.validations,
    locale          : state.ui.locale,
    flow            : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateOrganDonation, Page);
