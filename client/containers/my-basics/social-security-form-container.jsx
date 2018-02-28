'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { SSNValidator }         from '../../helpers/validations';
import { updateSocialSecurity } from "../../actions/index";
import Presentation             from '../../presentations/my-basics/social-security-page.jsx';
import { getDL }                from '../../helpers/data/card-type';

const Page = (props) => {
  let locale            =   props.locale;
  let validations       =   new SSNValidator(Object.assign(props.socialSecurity, {locale}), props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('socialSecurity', props, validations);
  let onBack            =   handlers.navigateOnBack(props);

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
    socialSecurity: state.application.basics.socialSecurity,
    cardType      : state.application.cardType,
    IDApp         : state.application.IDApp,
    DLApp         : state.application.DLApp,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    locale        : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateSocialSecurity, Page);