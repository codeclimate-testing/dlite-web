'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import handlers                 from '../../helpers/handlers';
import * as dataPresent         from '../../helpers/data-present';
import { updateContactMethods } from '../../actions/index';
import ContactMethodsPage       from '../../presentations/voter-registration/contact-methods/contact-methods-choice-page.jsx';
import PreRegContactMethodsPage from '../../presentations/voter-registration/contact-methods/contact-methods-prereg-choice-page.jsx';
import { isPreregistering }     from '../../helpers/calculate-age';
import {
   shouldContactMethods
  } from '../../helpers/data/voting';

const Page = (props) => {
  let continueDisabled = !(dataPresent.contactMethods(props.contactMethods));
  if (shouldContactMethods(props)) {
    continueDisabled = false;
  };
  let onSubmit            = handlers.navigateOnSubmit('/voting-registration/confirmation', props);
  let onBack              = handlers.navigateOnBack(props);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegContactMethodsPage : ContactMethodsPage;
    return (
    <Presentation
      {...props}
      onBack            = { onBack }
      onSubmit          = { onSubmit }
      continueDisabled  = { continueDisabled }
      />
  );
};

const mapStateToProps = (state) => {
  return {
    contactMethods: state.application.contactMethods,
    dateOfBirth:  state.application.dateOfBirth,
    focused:  state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateContactMethods, Page);