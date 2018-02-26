'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation             from '../presentations/page.jsx';
import handlers                 from '../helpers/handlers';
import { getTextFromPathname }  from '../helpers/data/pathnames';

const Page = (props) => {
  let sectionKey = getTextFromPathname(props, props.sectionKey, '');
  props.onPageLoad(sectionKey, props.section);

  return (
    <Presentation {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    cardType:       state.application.cardType,
    section:        state.ui.section,
    addApp:         state.ui.addApp,
    locale:         state.ui.locale
  };
}

const mapDispatchToProps = (dispatch) => {
  const onPageLoad            = handlers.onPageLoad(dispatch);
  const onFlowChange          = handlers.onFlowChange(dispatch);
  const onLocaleChange        = handlers.onLocaleChange(dispatch);
  return {
    onPageLoad,
    onFlowChange,
    onLocaleChange
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
