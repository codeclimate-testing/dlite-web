'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import Presentation           from "../../presentations/getStarted/reduced-fee-page.jsx";
import { updateReducedFee }   from "../../actions/index";
import { ReducedFeeValidator }from '../../helpers/validations';

const Page = (props) => {
  let validations       = new ReducedFeeValidator(props, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('reducedFeeID', props, validations)
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit    = { onSubmit }
      onBack      = { onBack }
      validations = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    reducedFee:  state.application.reducedFee,
    cardType:    state.application.cardType,
    focused:     state.ui.focus,
    validations: state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateReducedFee, Page);

