'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation       from "../../presentations/getStarted/get-started-page.jsx";
import navigateOnBack     from '../../helpers/handlers/navigate-on-back';
import { changeSection }  from '../../actions';

const Page = (props) => {
  let onBack = navigateOnBack(props);

  return (
    <Presentation onBack = { onBack } />
  );
};

const mapStateToProps = (state) => {
  return {
    cardType: state.application.cardType,
    seniorID: state.application.seniorID
  };
};

export default connect(mapStateToProps)(Page);
