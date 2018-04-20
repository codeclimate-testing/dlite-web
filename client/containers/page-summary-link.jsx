'use strict'

import React                    from 'react';
import { connect }              from 'react-redux';
import handlers                 from '../helpers/handlers';
import Presentation             from '../presentations/page-summary-link.jsx';
import { getFlow }              from '../helpers/data/application';
import onFlowChangeGenerator    from '../helpers/handlers/on-flow-change-generator';
import { getData }              from '../actions/api-actions';

const PageSummaryLink = (props) => {

  return (
    <Presentation
      {...props}
    />
  )
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  let linkType = ownProps.linkType || 'summary-edit';
  let flow = getFlow(linkType);

  let props = Object.assign({}, ...[ownProps, dispatchProps, {flow: flow, linkType: linkType}]);
  props.onClick = onFlowChangeGenerator(props, flow, linkType);

  return props;
}

export default connect(null, mapDispatchToProps, mergeProps)(PageSummaryLink);