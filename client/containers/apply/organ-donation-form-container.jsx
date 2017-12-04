'use strict';

import React from 'react';

import { updateOrganDonation }      from "../../actions/index";
import HomeLink                     from '../../presentations/home-link.jsx';
import ContinueButton               from '../../presentations/continue-button.jsx';
import BackButton                   from '../../presentations/back-button.jsx';
import DonateOrgan                  from '../../presentations/apply/donate-organ-form.jsx';
import DonateContribution           from '../../presentations/apply/donate-contribution-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = !dataPresent.organDonation(props.organDonation);
  const onSubmit         = props.dateOfBirth.age >= 16 ? navigateOnSubmit('/voting-registration/introduction', props) : navigateOnSubmit('/summary', props);
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
        <ContinueButton disabled={continueDisabled} /> <BackButton onBack={onBack} key = 'back-button' />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    organDonation: state.application.organDonation,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateOrganDonation, ConnectedForm);
