'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import { updateCDLChanges }   from '../../actions/index';
import Presentation           from '../../presentations/cdl/correct-or-update-page.jsx';
import { ChangeValidator }    from '../../helpers/validations';

const Page = (props) => {
  let validations       = new ChangeValidator(props.cardChanges, props.validations, 'applicationActionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('cdlChanges', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardChanges         : state.cdl.cardChanges,
    cardAction          : state.application.cardAction,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLChanges, Page);
