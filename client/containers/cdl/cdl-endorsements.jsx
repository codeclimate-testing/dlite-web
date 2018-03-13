'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import { updateCDLEndorsements }    from "../../actions/index";
import Presentation             from "../../presentations/cdl/cdl-endorsements-page.jsx";
import handlers                 from '../../helpers/handlers';
import { CDLEndorsementsValidator } from '../../helpers/validations';

const Page = (props) => {
  let validations = new CDLEndorsementsValidator(props, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('cdlEndorsements', props, validations);
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
    cdlEndorsements  : state.cdl.cdlEndorsements,
    licenseClass     : state.cdl.licenseClass,
    focused          : state.ui.focus,
    validations      : state.ui.validations,
    locale           : state.ui.locale,
    flow             : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLEndorsements, Page);

