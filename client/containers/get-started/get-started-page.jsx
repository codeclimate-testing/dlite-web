'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation       from "../../presentations/get-started/get-started-page.jsx";
import navigateOnBack     from '../../helpers/handlers/navigate-on-back';
import { changeSection }  from '../../actions';
import { getCorrectApp }  from '../../helpers/data/card-type';


const Page = (props) => {
  let onBack = navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onBack = { onBack }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cardAction      : state.application.cardAction,
    IDApp           : state.application.IDApp,
    DLApp           : state.application.DLApp,
    cardType        : state.application.cardType,
    cardChanges     : getCorrectApp(state.application).cardChanges,
    realID          : state.application.realID,
    reducedFee      : state.application.IDApp.reducedFee,
    seniorID        : state.application.IDApp.seniorID
  };
};

export default connect(mapStateToProps)(Page);
