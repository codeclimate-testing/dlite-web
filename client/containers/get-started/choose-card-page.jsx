'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { CardTypeValidator }  from '../../helpers/validations';

import { updateCardType }     from "../../actions/index";
import Presentation           from "../../presentations/get-started/choose-card-page.jsx";

import {
  getDL,
  canContinue
} from '../../helpers/data/card-type';

const Page = (props) => {
  let validateProps;
  switch (props.cardAction) {
    case 'new':
      validateProps = props.cardType.new;
      break;
    case 'renew':
      validateProps = props.cardType.renew;
      break;
    case 'change':
      validateProps = props.cardType.change;
      break;
    case 'replace':
      validateProps = props.cardType.replace;
      break;
    default:
      validateProps = props.cardType;
  };
  let validations       =   new CardTypeValidator(validateProps, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('chooseCardType', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

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
    cardType:     state.application.cardType,
    cardAction:   state.application.cardAction,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardType, Page);