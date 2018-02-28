'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { updateContactMethods } from '../../actions/index';
import Presentation             from '../../presentations/voter-registration/contact-methods-page.jsx';
import { ContactValidator }     from '../../helpers/validations';

const Page = (props) => {
  let locale         = props.locale;
  let validations    = new ContactValidator(Object.assign(props.contactMethods, {locale}), props.validations);
  let onSubmit       = handlers.navigateOrShowErrors('contactMethods', props, validations);
  let onBack         = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onBack          = { onBack }
      onSubmit        = { onSubmit }
      validations     = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    contactMethods  : state.application.voting.contactMethods,
    dateOfBirth     : state.application.basics.dateOfBirth,
    focused         : state.ui.focus,
    validations     : state.ui.validations,
    locale          : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateContactMethods, Page);