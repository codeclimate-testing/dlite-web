'use strict';

import React                      from 'react';
import { updateCDLNamesHistory }  from '../../../actions/index';
import { NamesValidator }         from '../../../helpers/validations';
import connectForm                from '../../../helpers/connect-form';
import handlers                   from '../../../helpers/handlers';
import Presentation               from '../../../presentations/cdl/my-history/names-history-page.jsx';

const Page = (props) => {
  let validations = new NamesValidator(props.namesHistory, props.validations, 'selectionMissing');
  let onSubmit    = handlers.navigateOrShowErrors('cdlNameHistory', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

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
    namesHistory      : state.cdl.history.namesHistory,
    cardAction        : state.cdl.cardAction,
    focused           : state.ui.focus,
    validations       : state.ui.validations,
    flow              : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLNamesHistory, Page);

