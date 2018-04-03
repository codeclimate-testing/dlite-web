'use strict'

import React              from 'react';
import { connect }        from 'react-redux';
import handlers           from '../helpers/handlers';
import Presentation       from '../presentations/page-summary-link.jsx';
import { addOrEditFlow }  from '../helpers/data/pathnames';

const PageSummaryLink = (props) => {
  let flow = addOrEditFlow(props, 'add', 'edit');

  return (
    <Presentation
      {...props}
      flow = { flow }
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