'use strict';

import React from 'react';

import { updateRealID }       from "../../actions/index";
import Form                   from "../../presentations/apply/real-id-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   props.cardType.ID === true ? navigateOnSubmit('/reduced-fee', props) : navigateOnSubmit('/get-started', props);
  let onBack            =   navigateOnBack('/what-do-you-want-to-do-today', props);
  let continueDisabled  =   !(dataPresent.realID(props.realID));

  return (
    <Form
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      onChange          = { props.onChange }
      realID            = { props.realID }
      cardType          = { props.cardType }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    realID :            state.application.realID,
    cardType:           state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateRealID, ConnectedForm);
