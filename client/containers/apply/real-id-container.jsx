'use strict';

import React from 'react';

import { updateRealID }       from "../../actions/index";
import Form                   from "../../presentations/apply/real-id-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/my-basics/address', props);
  let onBack            =   navigateOnBack('/my-basics/date-of-birth', props);
  let continueDisabled  =   !(dataPresent.realID(props.realID));
  let pageTitle         =   'DMV: License application - My basics'
  
  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      onChange          = { props.onChange }
      realID            = { props.realID }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    realID : state.application.realID
  };
}

export default connectForm(mapStateToProps, updateRealID, ConnectedForm);
