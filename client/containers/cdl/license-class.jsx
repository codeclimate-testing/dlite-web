'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import { updateCDLClass }       from "../../actions/index";
import Presentation             from "../../presentations/cdl/license-class-page.jsx";
import handlers                 from '../../helpers/handlers';
import { SelectionValidator }   from '../../helpers/validations';

const Page = (props) => {
  let locale      = props.locale;
  let validations = new SelectionValidator(Object.assign(props.licenseClass, {locale}), props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('cdlClass', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit    = { onSubmit }
      onBack      = { onBack }
      validations = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    licenseClass  : state.cdl.licenseClass,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    locale        : state.ui.locale,
    flow          : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLClass, Page);

