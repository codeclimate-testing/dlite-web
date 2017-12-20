'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation       from "../../presentations/intro/get-started-page.jsx";
import navigateOnBack     from '../../helpers/navigate-on-back';

const Page = (props) => {
  let onBack = navigateOnBack(props);

  return (
    <Presentation onBack = { onBack } />
  );
};

function mapStateToProps(state) {
  return {
    cardType: state.application.cardType,
    seniorID: state.application.seniorID
  };
}

export default connect(mapStateToProps)(Page);
