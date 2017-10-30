'use strict';

import React from 'react';

import { updateOrganDonation }      from "../../actions/index";
import HomeLink                     from '../../presentations/home-link.jsx';
import ContinueButton               from '../../presentations/continue-button.jsx';
import DonateOrgan                  from '../../presentations/apply/donate-organ-form.jsx';
import DonateContribution           from '../../presentations/apply/donate-contribution-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = !dataPresent.organDonation(props.organDonation);
  const onSubmit = navigateOnSubmit('/voter/voter-introduction', props);

  return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
        <DonateOrgan
          onChange={props.onChange}
          organDonation={props.organDonation}
        />
        <DonateContribution
          onChange={props.onChange}
          organDonation={props.organDonation}
        />
        <ContinueButton disabled={continueDisabled} />
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
