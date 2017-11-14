'use strict';

import React from 'react';

import { updateMailingAddress }     from "../../actions/index";
import HomeLink                     from '../../presentations/home-link.jsx';
import ContinueButton               from '../../presentations/continue-button.jsx';
import HomeAddress                  from "./home-address-form-container.jsx";
import InterstitialAddress          from '../../presentations/apply/interstitial-address-form.jsx';
import MailingAddress               from "./mailing-address-form-container.jsx";
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/my-basics/physical-traits', props);
  let onBack            = navigateOnBack('/my-basics/date-of-birth', props);
  let continueDisabled  = !(dataPresent.homeAddressSameAsMailing(props.homeAddress));

  if(props.homeAddress.homeAddressSameAsMailing === 'Yes') {
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
            <HomeAddress
            />

            <br></br>

            <MailingAddress
            />

            <ContinueButton disabled={continueDisabled} /> <button type="button" onClick={onBack}>Back</button> 
          </form>
      </div>
  );

}

  return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
         <HomeAddress
         />

         <ContinueButton disabled={continueDisabled} /> <button type="button" onClick={onBack}>Back</button> 
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
