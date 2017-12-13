'use strict';

import React from 'react';

import { updateReducedFee }   from "../../actions/index";
import Form                   from "../../presentations/apply/reduced-fee-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';


const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/get-started', props);
  let onBack            =   navigateOnBack('/real-id', props);
  let continueDisabled  =   !dataPresent.reducedFee(props.reducedFee);

  const DLText = (props) => {
    if (!(props.cardType.ID && props.cardType.DL)) { return null; }
    return (<h5>This only applies to your ID Card. You cannot get a free or reduced fee driver license.</h5>);
  };

  return (
    <Form
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      onChange          = { props.onChange }
      reducedFee        = { props.reducedFee }
      cardType          = { props.cardType }
      continueDisabled  = { continueDisabled }
    >
      <DLText 
        {...props}
      />
    </Form>
  );
};

function mapStateToProps(state) {
  return {
    reducedFee:   state.application.reducedFee,
    cardType:     state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateReducedFee, ConnectedForm);
