'use strict';

import React                      from 'react';
import connectForm                from '../../../helpers/connect-form';

import handlers                   from '../../../helpers/handlers';
import * as dataPresent           from '../../../helpers/data-present';
import { YouthDLValidator }       from '../../../helpers/validations';

import Presentation               from '../../../presentations/get-started/youth-license-notification-page.jsx';
import { updateYouthIDInstead }   from '../../../actions/index';
import { continueHidden }         from '../../../helpers/data/youth';
import { hasMultipleCards }       from '../../../helpers/data/cards';

const Page = (props) => {
  let validations         = new YouthDLValidator(props.youthIDInstead, props.validations);
  let onSubmit            = handlers.navigateOrShowErrors('youthIDInstead', props, validations);
  const onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.youthIDInstead }
      continueHidden    = { continueHidden(props) }
      validations       = { validations }
      multCards         = { hasMultipleCards(props) }
    />
  )
};

function mapStateToProps(state) {
  return {
    youthIDInstead: state.application.youthIDInstead,
    cardType:       state.application.cardType,
    dateOfBirth:    state.application.basics.dateOfBirth,
    focused:        state.ui.focus,
    validations:    state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateYouthIDInstead, Page);