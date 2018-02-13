'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { WDYWTDTValidator }   from '../../helpers/validations';
import { updateCardType }     from "../../actions/index";
import Presentation           from "../../presentations/get-started/what-do-you-want-to-do-today-page.jsx";

const Page = (props) => {
  let validations       =   new WDYWTDTValidator(props.cardType.cardAction, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors(props.name, props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardType.cardAction }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardType, Page);