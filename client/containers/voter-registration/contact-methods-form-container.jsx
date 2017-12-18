'use strict';

import React from 'react';

import { updateContactMethods } from '../../actions/index';
import NavigationButtons from '../../presentations/navigation-buttons.jsx';
import ContactChoice from '../../presentations/voter-registration/contact-methods-choice.jsx';
import PreRegContactChoice from '../../presentations/voter-registration/contact-methods-prereg-choice.jsx';
import ContactDetails from '../../presentations/voter-registration/contact-methods-details.jsx';
import connectForm from '../../helpers/connect-form';
import navigateOnSubmit from '../../helpers/navigate-on-submit';
import navigateOnBack from '../../helpers/navigate-on-back';
import * as dataPresent from '../../helpers/data-present';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const Presentation = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  if (isPreregistering(props.dateOfBirth)) {
    return <PreRegContactChoice
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onChange={props.onChange}
      selectedValue={props.contactMethods.shouldContact}
      />
  } else {
    return <ContactChoice
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onChange={props.onChange}
      selectedValue={props.contactMethods.shouldContact}
      />
  }
};

const ConnectedForm = (props) => {
  let continueDisabled = false;
  let showContactDetails = false;
  let onSubmit = navigateOnSubmit('/voting-registration/confirmation', props);
  let onBack = navigateOnBack(props);

  if (props.contactMethods.shouldContact === 'Yes') {
    showContactDetails = true;
    continueDisabled = !(dataPresent.contactMethods(props.contactMethods));

    return (
      <div>
        <form onSubmit={onSubmit}>
          <div><Presentation {...props} /></div>
          <ContactDetails
            onChange={props.onChange}
            contactDetails={props.contactMethods}
            onBack={onBack}
          />
          <NavigationButtons
            continueDisabled={continueDisabled}
            onBack={onBack}
          />
        </form>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div><Presentation {...props} /></div>
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
    contactMethods: state.application.contactMethods,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateContactMethods, ConnectedForm);
