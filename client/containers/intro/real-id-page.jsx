'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';

import { updateRealID }       from "../../actions/index";
import Presentation           from "../../presentations/intro/real-id-page.jsx";

import handlers               from '../../helpers/handlers';

import {
  validToContinue,
} from '../../helpers/data/real-id';

import {
  eligibleForReducedFee
} from '../../helpers/data/reduced-fee';

const Page = (props) => {
  let address = '/get-started';
  if (eligibleForReducedFee(props)) {
    address = '/reduced-fee';
  };

  let onSubmit          = handlers.navigateOnSubmit(address, props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = !validToContinue(props);

  return <Presentation
    {...props}
    onSubmit={onSubmit}
    onBack={onBack}
    continueDisabled={continueDisabled}
  />;
};

const mapStateToProps = (state) => {
  return {
    realID :    state.application.realID,
    cardType:   state.application.cardType,
    seniorID:   state.application.seniorID
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateRealID, dispatch);
  const onSubmit   = handlers.onFormSubmit;

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
