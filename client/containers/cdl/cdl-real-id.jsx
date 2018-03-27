'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import { updateCDLRealID }        from '../../actions/index';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/get-started/real-id-page.jsx';
import { RealIDValidator }        from '../../helpers/validations';

const Page = (props) => {
  let validations       = new RealIDValidator(props, props.validations, 'realIdSelectionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('cdlRealID', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit            = { onSubmit }
      onBack              = { onBack }
      validations         = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    realID :      state.cdl.realID,
    focused:      state.ui.focus,
    validations:  state.ui.validations,
    flow:         state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLRealID, Page);
