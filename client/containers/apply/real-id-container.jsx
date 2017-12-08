'use strict';

import React from 'react';

import { updateRealID }       from "../../actions/index";
import RealIdOneCardForm      from "../../presentations/apply/real-id-one-card-form.jsx";
import RealIdTwoCardForm      from "../../presentations/apply/real-id-two-card-form.jsx";
import RealIdDesignationForm  from "../../presentations/apply/real-id-designation-form.jsx";
import NavigationButtons      from '../../presentations/navigation-buttons.jsx';
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/get-started', props);
  let onBack            =   navigateOnBack('/what-do-you-want-to-do-today', props);
  let continueDisabled  =   !(dataPresent.realID(props.realID));

  let content = [];

  if(props.cardType.ID && props.cardType.DL) {
    content.push(
      <RealIdTwoCardForm
        onChange = { props.onChange }
        selectedValue = { props.realID.getRealID }
        cardType = { props.cardType }
        key = 'real-id-two-card-form'
      />
    )
  } else {
    content.push(
      <RealIdOneCardForm
        onChange = { props.onChange }
        selectedValue = { props.realID.getRealID }
        cardType = { props.cardType }
        key = 'real-id-one-card-form'
      />
    )
  };

  if(props.realID.getRealID === 'Yes' && props.cardType.ID && props.cardType.DL) {
    continueDisabled = !(props.realID.realIdDesignation);
    content.push(
      <RealIdDesignationForm
        onChange = { props.onChange }
        selectedValue = {props.realID.realIdDesignation}
        key = 'real-id-designation'
      />
    )
  };

  content.push(
    <NavigationButtons
      continueDisabled  = { continueDisabled }
      onBack            = { onBack }
      key               ='navigation-buttons'
    />
  );

  return (
    <form onSubmit={onSubmit}>
      { content }
    </form>
  )
};

function mapStateToProps(state) {
  return {
    realID :  state.application.realID,
    cardType: state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateRealID, ConnectedForm);
