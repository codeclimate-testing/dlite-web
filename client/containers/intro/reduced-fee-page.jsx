'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import { canContinue }        from '../../helpers/data/reduced-fee';
import Presentation           from "../../presentations/intro/reduced-fee-page.jsx";
import { updateReducedFee }   from "../../actions/index";

const Page = (props) => {
  let onSubmit          =   handlers.navigateOnSubmit('/get-started', props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !canContinue(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    reducedFee:   state.application.reducedFee,
    cardType:     state.application.cardType,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateReducedFee, Page);

