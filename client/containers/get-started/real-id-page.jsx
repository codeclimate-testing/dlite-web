'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import { updateRealID }           from '../../actions/index';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/get-started/real-id-page.jsx';
import { RealIDValidator }        from '../../helpers/validations';

const Page = (props) => {
  let validations       = new RealIDValidator(props, props.validations, 'realIdSelectionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('realID', props, validations)
  let onBack            = handlers.navigateOnBack(props, validations);

  return <Presentation
    {...props}
    onSubmit            = { onSubmit }
    onBack              = { onBack }
    validations         = { validations }
  />;
};

const mapStateToProps = (state) => {
  return {
    realID :      state.application.realID,
    cardType:     state.application.cardType,
    IDApp:        state.application.IDApp,
    DLApp:        state.application.DLApp,
    seniorID:     state.application.IDApp.seniorID,
    focused:      state.ui.focus,
    validations:  state.ui.validations,
    locale:       state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateRealID, Page);
