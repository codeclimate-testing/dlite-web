'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import Presentation             from '../presentations/page.jsx';
import handlers                 from '../helpers/handlers';
import {
  getTextFromState,
  getAppType,
  onEmojiDebug
} from '../helpers/data/pathnames';

const Page = (props) => {
  let sectionKey = getTextFromState(props, props.sectionKey, '');
  props.onPageLoad(sectionKey, props.section);

  // determine which app (cdl or IDDL they are on) from chooseApp else pathname
  let appName = getAppType(props);

  return (
    <Presentation
      {...props}
      appName = {appName}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cardType:             state.application.cardType,
    chooseApp:            state.ui.chooseApp,
    section:              state.ui.section,
    language:             state.ui.language,
    translationLanguage:  state.server.translations.translationLanguage,
    isLoggedIn:           state.ui.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  const onPageLoad            = handlers.onPageLoad(dispatch);
  const onEmojiDebug          = handlers.onEmojiDebug(dispatch);
  return {
    onPageLoad,
    onEmojiDebug
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
