'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { WDYWTDTValidator }   from '../../helpers/validations';
import { updateCdlCardAction }   from "../../actions/index";
import Presentation           from "../../presentations/cdl/what-do-you-want-to-do-today-page.jsx";

const Page = (props) => {
  let validations       =   new WDYWTDTValidator(props.cardAction, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors(props.addressName, props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardAction }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardAction:       state.cdl.basics.cardAction,
    focused:          state.ui.focus,
    validations:      state.ui.validations,
    addApp:           state.ui.addApp
  };
};

export default connectForm(mapStateToProps, updateCdlCardAction, Page);
