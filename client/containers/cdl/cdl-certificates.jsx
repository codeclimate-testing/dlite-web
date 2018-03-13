'use strict';

import React                        from 'react';
import connectForm                  from '../../helpers/connect-form';

import { updateCDLCertificates }    from "../../actions/index";
import Presentation                 from "../../presentations/cdl/cdl-certificates-page.jsx";
import handlers                     from '../../helpers/handlers';
import { CDLCertificatesValidator } from '../../helpers/validations';

const Page = (props) => {
  let validations = new CDLCertificatesValidator(props, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('cdlCertificates', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

  return <Presentation
    {...props}
    onSubmit    = { onSubmit }
    onBack      = { onBack }
    validations = { validations }
  />;
};

const mapStateToProps = (state) => {
  return {
    cdlCertificates  : state.cdl.cdlCertificates,
    licenseClass     : state.cdl.licenseClass,
    focused          : state.ui.focus,
    validations      : state.ui.validations,
    locale           : state.ui.locale,
    flow             : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLCertificates, Page);