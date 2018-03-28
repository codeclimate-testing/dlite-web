'use strict';

import React                  from 'react';
import connectForm            from '../../../helpers/connect-form';

import handlers               from '../../../helpers/handlers';
import { WDYWTDTValidator }   from '../../../helpers/validations';
import { updateCardAction }   from "../../../actions/index";
import { getCorrectApp }      from '../../../helpers/data/card-type';
import Presentation           from "../../../presentations/get-started/what-do-you-want-to-do-today-page.jsx";
import { getActionFromState}  from '../../../helpers/data/pathnames';

const Page = (props) => {
  let validations       =   new WDYWTDTValidator(props.cardAction, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('wdywtdt', props, validations);
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
    currentCardInfo:  getCorrectApp(state.application).currentCard,
    cardAction:       getActionFromState(state),
    cardType:         state.application.cardType,
    seniorID:         state.application.IDApp.seniorID,
    dateOfBirth:      state.application.basics.dateOfBirth,
    licenseAndIdHistory:  state.application.history.licenseAndIdHistory,
    focused:          state.ui.focus,
    validations:      state.ui.validations,
    flow:             state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCardAction, Page);