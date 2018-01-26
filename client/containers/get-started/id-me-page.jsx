'use strict';

import React              from 'react';
import { connect }        from 'react-redux';
import handlers           from '../../helpers/handlers';

import Presentation       from "../../presentations/get-started/id-me-page.jsx";

const Page = (props) => {
  let onBack = handlers.navigateOnBack(props);

  return (
    <Presentation onBack = { onBack } />
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Page);
