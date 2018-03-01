'use strict';

import React                    from 'react';
import connectForm              from '../../../helpers/connect-form';
import handlers                 from '../../../helpers/handlers';
import { AddressValidator }     from '../../../helpers/validations';
import Presentation             from '../../../presentations/cdl/residency.jsx';
import { updateCdlResidency }   from '../../../actions/index';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new AddressValidator(Object.assign(props.residency, {locale}), props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlResidency', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onBack      = { onBack }
      onSubmit    = { onSubmit }
      validations = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    residency:      state.cdl.basics.residency,
    validations:    state.ui.validations,
    focused:        state.ui.focus,
    hover:          state.ui.hover,
    locale:         state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCdlResidency, Page);