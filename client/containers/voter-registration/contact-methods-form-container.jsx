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
   shouldContactMethods
  } from '../../helpers/data/voting';

const Page = (props) => {
  let continueDisabled = !(dataPresent.contactMethods(props.contactMethods));
  if (shouldContactMethods(props)) {
    continueDisabled = false;
  };
  let onSubmit            = handlers.navigateOnSubmit('/voting-registration/confirmation', props);
  let onBack              = handlers.navigateOnBack(props);

  if (isPreregistering(props.dateOfBirth)) {
    return <PreRegContactMethodsPage
      {...props}
      onBack            = { onBack }
      onSubmit          = { onSubmit }
      continueDisabled  = { continueDisabled }
      />
  } else {
    return <ContactMethodsPage
      {...props}
      onBack            = { onBack }
      onSubmit          = { onSubmit }
      continueDisabled  = { continueDisabled }
      />
  }
};

const mapStateToProps = (state) => {
  return {
    contactMethods: state.application.contactMethods,
    dateOfBirth:  state.application.dateOfBirth,
    focused:  state.ui.focus
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange = handlers.onInputChange(updateContactMethods, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
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
