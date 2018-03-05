'use strict';

import React                         from 'react';
import connectForm                   from '../../../helpers/connect-form';
import handlers                      from '../../../helpers/handlers';
import * as dataPresent              from '../../../helpers/data-present';
import Presentation                  from "../../../presentations/my-basics/traits-height-weight-page.jsx";
import { updateCdlHeightWeight }     from "../../../actions/index";
import { HeightWeightValidator }     from '../../../helpers/validations';


const Page = (props) => {
  let locale      = props.locale;
  let validations = new HeightWeightValidator(Object.assign(props.traitsHeightWeight, {locale}), props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('cdlHeightWeight', props, validations);
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

function mapStateToProps(state) {
  return {
    traitsHeightWeight: state.cdl.basics.traitsHeightWeight,
    focused:            state.ui.focus,
    validations:        state.ui.validations,
    locale:             state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCdlHeightWeight, Page);
