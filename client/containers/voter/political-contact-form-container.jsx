'use strict';

import React from 'react';

import { updatePoliticalContact }   from '../../actions/index';
import HomeLink                     from '../../presentations/home-link.jsx';
import ContinueButton               from '../../presentations/continue-button.jsx';
import ContactChoice                from '../../presentations/voter/political-contact-choice.jsx';
import ContactDetails               from '../../presentations/voter/political-contact-details.jsx';
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import * as dataPresent             from '../../helpers/data-present';


const ConnectedForm = (props) => {
  let continueDisabled    = false;
  let showContactDetails  = false;
  let onSubmit            = navigateOnSubmit('/about-me/voter/voter-reg-complete', props);

  if(props.politicalContact.shouldContact === 'Yes') {
    showContactDetails  = true;
    continueDisabled    = !(dataPresent.contactDetails(props.politicalContact));
  }

  return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
        <ContactChoice
          onChange={props.onChange}
          selectedValue={props.politicalContact.shouldContact}
        />
        {
          showContactDetails &&
          <ContactDetails
            onChange          = {props.onChange}
            contactDetails    = {props.politicalContact}
          />
        }
        <ContinueButton disabled={continueDisabled} />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    politicalContact: state.application.politicalContact
  };
}

export default connectForm(mapStateToProps, updatePoliticalContact, ConnectedForm);