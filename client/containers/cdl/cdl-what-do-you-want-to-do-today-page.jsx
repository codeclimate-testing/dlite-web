'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { WDYWTDTValidator }   from '../../helpers/validations';
import { updateCdlCardAction }   from "../../actions/index";
import Presentation           from "../../presentations/cdl/what-do-you-want-to-do-today-page.jsx";

const Page = (props) => {
  let locale            =   props.locale;
  let validations       =   new WDYWTDTValidator(Object.assign(props.cardAction, {locale}), props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('cdlWdywtdt', props, validations);
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
    cardAction:       state.cdl.cardAction,
    currentCardInfo:  state.cdl.currentCardInfo,
    focused:          state.ui.focus,
    validations:      state.ui.validations,
    flow:             state.ui.flow,
    locale:           state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCdlCardAction, Page);
