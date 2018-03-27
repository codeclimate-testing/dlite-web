'use strict';

import React                      from 'react';
import connectForm                from '../../../helpers/connect-form';
import handlers                   from '../../../helpers/handlers';
import { CurrentCardValidator}    from '../../../helpers/validations';
import Presentation               from '../../../presentations/cdl/current-card-page.jsx';
import { updateCdlCurrentDL }     from '../../../actions/index';

const Page = (props) => {
  let validations       = new CurrentCardValidator(props.currentCardInfo, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlCurrentDL', props, validations);
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
    currentCardInfo:  state.cdl.history.currentDLInfo,
    validations:      state.ui.validations,
    focused:          state.ui.focus,
    flow:             state.ui.flow,
    classM:           state.cdl.classM
  };
};

export default connectForm(mapStateToProps, updateCdlCurrentDL, Page);