'use strict'

import React              from 'react';
import { connect }        from 'react-redux';
import handlers           from '../helpers/handlers';
import Presentation       from '../presentations/page-summary-link.jsx';

const PageSummaryLink = (props) => {
  return (
    <Presentation
      {...props}
    />
  )
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  const onFlowChange     = handlers.onFlowChange(dispatch);
  return {
    onFlowChange
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSummaryLink);