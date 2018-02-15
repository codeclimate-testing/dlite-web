'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation             from '../presentations/page.jsx';
import handlers                 from '../helpers/handlers';
import { setKeyFromPathname }  from '../helpers/data/pathnames';

const Page = (props) => {
  let sectionKey = setKeyFromPathname(props);
  props.onPageLoad(sectionKey, props.section);
  props.onFlowChange(props);

  return (
    <Presentation {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    cardType:   state.application.cardType,
    section:    state.ui.section,
    addApp:     state.ui.addApp
  };
}

const mapDispatchToProps = (dispatch) => {
  const onPageLoad    = handlers.onPageLoad(dispatch);
  const onFlowChange  = handlers.onFlowChange(dispatch);

  return {
    onPageLoad,
    onFlowChange
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
