'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { hasValue }           from '../../helpers/data/validations';

import { updateCardAction }   from "../../actions/index";

import Presentation           from "../../presentations/intro/what-do-you-want-to-do-today-page.jsx";

const Page = (props) => {
  let onSubmit          =   handlers.navigateOnSubmit('/select-id-dl', props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !hasValue(props.cardAction);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardAction }
      continueDisabled  = { continueDisabled }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardAction:   state.application.cardAction,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateCardAction, Page);