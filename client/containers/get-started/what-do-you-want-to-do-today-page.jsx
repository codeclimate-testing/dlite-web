'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { WDYWTDTValidator }   from '../../helpers/validations';
import { updateCardAction }   from "../../actions/index";
import { getCorrectApp }      from '../../helpers/data/card-type';
import Presentation           from "../../presentations/get-started/what-do-you-want-to-do-today-page.jsx";
import { getActionFromState } from '../../helpers/data/pathnames';

const Page = (props) => {
  let locale            =   props.locale;
  let validations       =   new WDYWTDTValidator(Object.assign(props.cardAction, {locale}), props.validations);
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
    cardAction:       getActionFromState(state),
    cardType:         state.application.cardType,
    dateOfBirth:      state.application.basics.dateOfBirth,
    focused:          state.ui.focus,
    validations:      state.ui.validations,
    addApp:           state.ui.addApp,
    currentCardInfo:  getCorrectApp(state.application).currentCard,
    locale:           state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCardAction, Page);