
'use strict';

import React from 'react';

import { updateReducedFee }   from "../../actions/index";
import Presentation           from "../../presentations/intro/reduced-fee-page.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const Page = (props) => {
  let onSubmit          =   navigateOnSubmit('/get-started', props);
  let onBack            =   navigateOnBack(props);
  let continueDisabled  =   !dataPresent.reducedFee(props.reducedFee);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    reducedFee:   state.application.reducedFee,
    cardType:     state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateReducedFee, Page);