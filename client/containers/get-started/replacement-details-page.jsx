'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import { ReplaceValidator }       from '../../helpers/validations';
import { updateCardReplacement }  from "../../actions/index";
import Presentation               from "../../presentations/get-started/replacement-details-page.jsx";
import { getCorrectApp }          from '../../helpers/data/card-type';


const Page = (props) => {
  let validations       =   new ReplaceValidator(props.cardReplacement, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('replacementDetails', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardReplacement.reason }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardReplacement     : getCorrectApp(state.application).replacementDetails,
    cardType            : state.application.cardType,
    dateOfBirth         : state.application.basics.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardReplacement, Page);
