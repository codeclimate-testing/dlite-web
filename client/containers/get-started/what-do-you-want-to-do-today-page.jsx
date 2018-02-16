'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { WDYWTDTValidator }   from '../../helpers/validations';
import { updateCardAction }     from "../../actions/index";
import Presentation           from "../../presentations/get-started/what-do-you-want-to-do-today-page.jsx";

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
    cardAction:   state.application.cardAction,
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.basics.dateOfBirth,
    focused:      state.ui.focus,
    validations:  state.ui.validations,
    addApp:       state.ui.addApp
  };
};

export default connectForm(mapStateToProps, updateCardAction, Page);