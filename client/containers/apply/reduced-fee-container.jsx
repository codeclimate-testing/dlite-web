'use strict';

import React from 'react';

import { updateCardOptions }   from "../../actions/index";
import Form                   from "../../presentations/apply/reduced-fee-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/get-started', props);
  let onBack            =   navigateOnBack('/real-id', props);
  let continueDisabled  =   dataPresent.cardModificationOptions(props.cardOptions.ID);

  return (
    <Form
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      onChange          = { props.onChange }
      cardOptions       = { props.cardOptions }
      cardType          = { props.cardType }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    cardOptions:  state.application.cardOptions,
    cardType:     state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateCardOptions, ConnectedForm);
