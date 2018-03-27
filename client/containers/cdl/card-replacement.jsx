'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import { ReplaceValidator }       from '../../helpers/validations';
import { updateCDLCardReplacement }  from "../../actions/index";
import Presentation               from "../../presentations/cdl/cdl-card-replacement-details-page.jsx";


const Page = (props) => {
  let validations       =   new ReplaceValidator(props.cardReplacement, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('cdlCardReplacement', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

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
    cardReplacement     : state.cdl.cardReplacement,
    cardAction          : state.application.cardAction,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLCardReplacement, Page);
