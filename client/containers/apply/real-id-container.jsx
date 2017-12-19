'use strict';

import React                  from 'react';

import { updateRealID }       from "../../actions/index";
import Page                   from "../../presentations/apply/real-id-page.jsx";

import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import { validToContinue }    from '../../helpers/data/real-id';

const ConnectedForm = (props) => {
  let address           = (props.cardType.ID && props.seniorID !== 'Yes') ? '/reduced-fee' : '/get-started';
  let onSubmit          = navigateOnSubmit(address, props);
  let onBack            = navigateOnBack(props);
  let continueDisabled  = !validToContinue(props);

  return <Page
    {...props}
    onSubmit={onSubmit}
    onBack={onBack}
    continueDisabled={continueDisabled}
  />;
};

function mapStateToProps(state) {
  return {
    realID :    state.application.realID,
    cardType:   state.application.cardType,
    seniorID:   state.application.seniorID
  };
}

export default connectForm(mapStateToProps, updateRealID, ConnectedForm);
