'use strict'

import React              from 'react';
import { connect }        from 'react-redux';
import handlers           from '../helpers/handlers';
import Presentation       from '../presentations/page-summary-link.jsx';
import { addOrEditFlow }  from '../helpers/data/pathnames';
import { hasValue }       from '../helpers/data/validations';

const PageSummaryLink = (props) => {
  let flow = addOrEditFlow(props, 'add', 'edit');

  let changeFlow = (e) => {
    e.preventDefault();
    props.onFlowChange(flow, props.cardType, props.appID, props.history);
  };

  let newFlow = (e) => {
    e.preventDefault();
    props.newFlow(props.editKey, props.history);
  };

  let onClick = hasValue(props.newApp) ? newFlow : changeFlow;

  return (
    <Presentation
      {...props}
      onClick     = { onClick }
      flow        = { flow }
    />
  )
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  const onFlowChange      = handlers.onFlowChange(dispatch);
  const newFlow           = handlers.newFlow(dispatch);
  return {
    onFlowChange,
    newFlow
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSummaryLink);