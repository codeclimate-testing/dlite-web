'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import { CurrentCardValidator}    from '../../helpers/validations';
import { updateCurrentCDL }       from '../../actions/index';
import Presentation               from '../../presentations/cdl/current-cdl-page.jsx';


const Page = (props) => {
  let validations = new CurrentCardValidator(props.currentCardInfo, props.validations);
  let onSubmit = handlers.navigateOrShowErrors('cdlCurrentCard', props, validations);
  let onBack   = handlers.navigateOnBack(props, validations);
  return (
    <Presentation
      {...props}
      onSubmit                = { onSubmit }
      onBack                  = { onBack }
      validations             = { validations }
      onBlur                  = { props.onBlurValidate }
      onFocus                 = { props.onFocusClearValidation }
    />
  );
};

function mapStateToProps(state) {
  return {
    currentCardInfo   : state.cdl.currentCardInfo,
    cardAction        : state.cdl.cardAction,
    validations       : state.ui.validations,
    flow              : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCurrentCDL, Page);

