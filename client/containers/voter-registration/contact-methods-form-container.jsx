'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';

import handlers                 from '../../helpers/handlers';
import * as dataPresent         from '../../helpers/data-present';
import { updateContactMethods } from '../../actions/index';
import ContactMethodsPage       from '../../presentations/voter-registration/contact-methods/contact-methods-choice-page.jsx';
import PreRegContactMethodsPage from '../../presentations/voter-registration/contact-methods/contact-methods-prereg-choice-page.jsx';
import { isPreregistering }     from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';
import {
   shouldContactMethods
  } from '../../helpers/data/voting';

const Page = (props) => {
  const formPageTitle     = pageTitle(props.dateOfBirth);
  const formSectionName   = sectionName(props.dateOfBirth);
  let onSubmit            = handlers.navigateOnSubmit('/voting-registration/confirmation', props);
  let onBack              = handlers.navigateOnBack(props);

  let continueDisabled = !(dataPresent.contactMethods(props.contactMethods));
  if (shouldContactMethods(props)) {
    continueDisabled = false;
  };

  if (isPreregistering(props.dateOfBirth)) {
    return <PreRegContactMethodsPage
      {...props}
      pageTitle         = { formPageTitle }
      sectionName       = {formSectionName}
      onBack            = { onBack }
      onSubmit          = { onSubmit }
      continueDisabled  = { continueDisabled }
      />
  } else {
    return <ContactMethodsPage
      {...props}
      pageTitle         = { formPageTitle }
      sectionName       = { formSectionName }
      onBack            = { onBack }
      onSubmit          = { onSubmit }
      continueDisabled  = { continueDisabled }
      />
  }
};

function mapStateToProps(state) {
  return {
    contactMethods: state.application.contactMethods,
    dateOfBirth:  state.application.dateOfBirth,
    focused:  state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateContactMethods, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
