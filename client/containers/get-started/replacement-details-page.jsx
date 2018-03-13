'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import { ReplaceValidator }       from '../../helpers/validations';
import { updateCardReplacement }  from "../../actions/index";
import Presentation               from "../../presentations/get-started/replacement-details-page.jsx";
import { getCorrectApp }          from '../../helpers/data/card-type';


const Page = (props) => {
  let locale            =   props.locale;
  let validations       =   new ReplaceValidator(Object.assign(props.cardReplacement, {locale}), props.validations);
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
    cardAction          : state.application.cardAction,
    licenseAndIdHistory : state.application.history.licenseAndIdHistory,
    dateOfBirth         : state.application.basics.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    locale              : state.ui.locale,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCardReplacement, Page);
