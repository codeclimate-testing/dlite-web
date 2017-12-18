'use strict';

import React from 'react';
import { connect } from "react-redux";

import { updateSeniorID }     from "../../actions/index";
import connectForm            from '../../helpers/connect-form';
import SeniorIDForm           from "../../presentations/apply/senior-id-form.jsx";
import onInputChange          from '../../helpers/on-input-change';
import onFormSubmit           from '../../helpers/on-form-submit';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const Form = (props) => {
  let onSubmit          =   navigateOnSubmit('/real-id', props);
  let onBack            =   navigateOnBack('/what-do-you-want-to-do-today', props);
  let continueDisabled  =   !(dataPresent.value(props.seniorID));

  return (
    <form onSubmit={onSubmit}>
      <SeniorIDForm
        {...props}
        continueDisabled  = { continueDisabled }
        onBack            = { onBack }
        selectedValue     = { props.seniorID }
      />
    </form>
  )
};

function mapStateToProps(state) {
  return {
    seniorID :  state.application.seniorID,
    cardType:   state.application.cardType,
  };
}

export default connectForm(mapStateToProps, updateSeniorID, Form);
