'use strict';

import React from 'react';

import { updateCardType }     from "../../actions/index";
import Form                   from "../../presentations/apply/choose-card-type.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/real-id', props);
  let onBack            =   navigateOnBack('/my-basics/date-of-birth', props);
  let continueDisabled  =   !(dataPresent.cardType(props.cardType));
  let pageTitle         =   'DMV'

  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      onChange          = { props.onChange }
      cardType          = { props.cardType }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    cardType: state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateCardType, ConnectedForm);
