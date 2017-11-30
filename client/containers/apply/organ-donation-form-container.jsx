'use strict';

import React from 'react';

import { updateOrganDonation }      from "../../actions/index";
import HomeLink                     from '../../presentations/home-link.jsx';
import NavigationButtons                from '../../presentations/navigation-buttons.jsx';
import DonateOrgan                  from '../../presentations/apply/donate-organ-form.jsx';
import DonateContribution           from '../../presentations/apply/donate-contribution-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = !dataPresent.organDonation(props.organDonation);
  const onSubmit = navigateOnSubmit('/voting-registration/introduction', props);
  const onBack           = navigateOnBack('/my-history/veterans-service', props);
  const pageTitle        =   'DMV: License application - Organ donation'

  return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
        <DonateOrgan
          pageTitle = {pageTitle}
          onChange={props.onChange}
          organDonation={props.organDonation}
          selectedValue = {props.organDonation.donate}
        />
        <DonateContribution
          onChange={props.onChange}
          organDonation={props.organDonation}
          selectedValue = {props.organDonation.contribute}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    organDonation: state.application.organDonation
  };
}

export default connectForm(mapStateToProps, updateOrganDonation, ConnectedForm);
