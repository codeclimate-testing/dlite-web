'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation       from "../../presentations/get-started/get-started-page.jsx";
import navigateOnBack     from '../../helpers/handlers/navigate-on-back';
import { changeSection }  from '../../actions';

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
    cardAction:      state.application.cardAction,
    cardType:        state.application.cardType,
    cardChanges:     state.application.cardChanges,
    realID :         state.application.realID,
    licenseType:     state.application.licenseType,
    reducedFee:      state.application.reducedFee,
    seniorID:        state.application.seniorID
  };
};

export default connect(mapStateToProps)(Page);
