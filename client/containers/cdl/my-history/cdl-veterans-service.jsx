'use strict';

import React from 'react';

import { updateCDLVeteransService }   from '../../../actions/index';
import * as dataPresent               from '../../../helpers/data-present';
import connectForm                    from '../../../helpers/connect-form';
import handlers                       from '../../../helpers/handlers';
import Presentation                   from '../../../presentations/cdl/my-history/veterans-service-page.jsx';
import { VeteransValidator }          from '../../../helpers/validations';

const Page = (props) => {
  let validations       = new VeteransValidator(props, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlVeterans', props, validations)
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    veteransService : state.cdl.history.veteransService,
    cardAction      : state.cdl.cardAction,
    focused         : state.ui.focus,
    validations     : state.ui.validations,
    locale          : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCDLVeteransService, Page);
