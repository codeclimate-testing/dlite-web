'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import { CurrentCardValidator}    from '../../helpers/validations';
import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/get-started/current-card-page.jsx';
import { getCorrectApp }          from '../../helpers/data/card-type';

const Page = (props) => {
  let locale = props.locale;
  let validations = new CurrentCardValidator(Object.assign(props.currentCardInfo, {locale}), props.validations);
  let onSubmit = handlers.navigateOrShowErrors('currentCardInfo', props, validations);
  let onBack   = handlers.navigateOnBack(props, validations);
  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      currentCardInfo   = { props.currentCardInfo }
      validations       = { validations }
      onBlur            = { props.onBlurValidate }
      onFocus           = { props.onFocusClearValidation }
    />
  );
};

function mapStateToProps(state) {
  return {
    currentCardInfo   : getCorrectApp(state.application).currentCard,
    licenseAndIdHistory: state.application.history.licenseAndIdHistory,
    cardType          : state.application.cardType,
    cardAction        : state.application.cardAction,
    dateOfBirth       : state.application.basics.dateOfBirth,
    validations       : state.ui.validations,
    locale            : state.ui.locale,
    flow              : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCurrentCardInfo, Page);

