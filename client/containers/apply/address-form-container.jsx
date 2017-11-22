'use strict';

import React from 'react';

import { updateMailingAddress }     from "../../actions/index";
import HomeLink                     from '../../presentations/home-link.jsx';
import HomeAddress                  from "./home-address-form-container.jsx";
import NavigationButtons            from '../../presentations/navigation-buttons.jsx';
import InterstitialAddress          from '../../presentations/apply/interstitial-address-form.jsx';
import HomeAddress                  from "./home-address-form-container.jsx";
import MailingAddress               from "./mailing-address-form-container.jsx";
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/my-basics/physical-traits', props);
  let onBack            = navigateOnBack('/real-id', props);
  let continueDisabled  = !(dataPresent.homeAddressSameAsMailing(props.homeAddress));

  if(props.homeAddress.homeAddressSameAsMailing === 'Yes') {
    // TODO: there are much better ways to do this ... out of the view.
    // This should really be a state change only
    for (var prop in props.homeAddress) {
      if (props.homeAddress.hasOwnProperty(prop)) {
        props.mailingAddress[prop] = props.homeAddress[prop];
      };
    };
  };

  if(props.homeAddress.homeAddressSameAsMailing === 'No') {
    continueDisabled = !(dataPresent.address(props.mailingAddress));

    return(
      <div>
        <HomeLink />
        <form onSubmit={onSubmit}>
          <HomeAddress />
          <MailingAddress />
          <NavigationButtons
            onBack={onBack}
            continueDisabled={continueDisabled}
          />
        </form>
      </div>
    );
  }

  return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
         <HomeAddress/>
         <NavigationButtons
            onBack={onBack}
            continueDisabled={continueDisabled}
         />
       </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    mailingAddress: state.application.mailingAddress,
    homeAddress: state.application.homeAddress
  };
}

export default connectForm(mapStateToProps, updateMailingAddress, ConnectedForm);
