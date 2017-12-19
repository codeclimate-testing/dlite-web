'use strict';

import React from 'react';
import { connect } from "react-redux";

import { updateSeniorID }     from "../../actions/index";
import connectForm            from '../../helpers/connect-form';
import SeniorIDPage           from "../../presentations/intro/senior-id-page.jsx";
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const Form = (props) => {
  let onSubmit          =   navigateOnSubmit('/real-id', props);
  let onBack            =   navigateOnBack('/what-do-you-want-to-do-today', props);
  let continueDisabled  =   !(dataPresent.value(props.seniorID));

  return (
    <form onSubmit={onSubmit}>
      <SeniorIDPage
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
    seniorID :  state.application.seniorID
  };
}

export default connectForm(mapStateToProps, updateSeniorID, Form);
