'use strict';

import React                      from 'react';
import connectForm                from '../../../helpers/connect-form';
import handlers                   from '../../../helpers/handlers';
import { CurrentCardValidator}    from '../../../helpers/validations';
import Presentation               from '../../../presentations/cdl/current-card-page.jsx';
import { updateCdlCurrentDL }     from '../../../actions/index';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new CurrentCardValidator(Object.assign(props.currentCardInfo,{locale}), props.validations);
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
    addApp:           state.ui.addApp,
    locale:           state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCdlCurrentDL, Page);