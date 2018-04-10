'use strict'

import React                    from 'react';
import { connect }              from 'react-redux';
import handlers                 from '../helpers/handlers';
import Presentation             from '../presentations/page-summary-link.jsx';
import { getFlow }              from '../helpers/data/application';
import onFlowChangeGenerator    from '../helpers/handlers/on-flow-change-generator';
import { getData }              from '../actions/api-actions';

const PageSummaryLink = (props) => {
  let linkType = props.linkType || 'summary-edit';

  let flow = getFlow(linkType);

  let onClick = onFlowChangeGenerator(props, flow, linkType);

  return (
    <Presentation
      {...props}
      linkType    = { linkType }
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
  const goGetData         = getData(dispatch);

  return {
    onFlowChange,
    newFlow,
    goGetData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSummaryLink);