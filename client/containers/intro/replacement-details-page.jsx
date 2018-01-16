'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { ReplaceValidator }   from '../../helpers/validations';
import { updateCardReplacement }  from "../../actions/index";
import Presentation           from "../../presentations/intro/replacement-details-page.jsx";

const Page = (props) => {
  let validations       =   new ReplaceValidator(props.cardReplacement, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('chooseCardReplacement', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);
  
  let focus             =   function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardReplacement.reason }
      validations       = { validations }
      onFocus           = { focus }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardReplacement     : state.application.cardReplacement,
    cardType            : state.application.cardType,
    cardAction          : state.application.cardAction,
    dateOfBirth         : state.application.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardReplacement, Page);
