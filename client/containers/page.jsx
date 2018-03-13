'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation             from '../presentations/page.jsx';
import handlers                 from '../helpers/handlers';
import { getTextFromState }     from '../helpers/data/pathnames';

const Page = (props) => {
  let sectionKey = getTextFromState(props, props.sectionKey, '');
  props.onPageLoad(sectionKey, props.section);

  return (
    <Presentation {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    cardType:       state.application.cardType,
    appType:        state.ui.appType,
    section:        state.ui.section,
    locale:         state.ui.locale
  };
}

const mapDispatchToProps = (dispatch) => {
  const onPageLoad            = handlers.onPageLoad(dispatch);
  const onLocaleChange        = handlers.onLocaleChange(dispatch);
  return {
    onPageLoad,
    onLocaleChange
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
