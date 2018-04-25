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
import AutoSave     from './auto-save.jsx'

const Page = (props) => {
  let sectionKey = getTextFromState(props, props.sectionKey, '');
  let currentPage = props.location ? props.location.pathname : null;
  props.onPageLoad(sectionKey, props.section, currentPage, props.savedPath);


  return (
    <div>
      <AutoSave {...props}/>
      <Presentation
        {...props}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cardType:             state.application.cardType,
    chooseApp:            state.ui.chooseApp,
    section:              state.ui.section,
    language:             state.ui.language,
    translationLanguage:  state.server.translations.translationLanguage,
    isLoggedIn:           state.ui.isLoggedIn,
    savedPath:            state.pathname
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
