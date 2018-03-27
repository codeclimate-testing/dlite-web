'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';
import mapDispatchToProps           from '../helpers/handlers/map-dispatch-to-props';
import {
  languageIsSelected,
  cookieOrEnglish
}        from '../helpers/data/application';
import {
  getLanguageFromCookie
 }  from '../helpers/data/cookies';
import { updateLanguage }           from '../actions/index';
import  getTranslation              from '../actions/get-translation';
import {
  translateThis,
  needToLoadTranslation
} from '../helpers/data/translator';

const Translator = (props) => {

  if (!languageIsSelected(props.language)) {
    let cookieLanguage = getLanguageFromCookie();
    let language = cookieOrEnglish(cookieLanguage);
    props.dispatch(updateLanguage('language', language));
    return null;
  }

  if (needToLoadTranslation(props)) {
    getTranslation(props.language)(props.dispatch);
    return null;
  }

  const Tag                 = props.tag;
  const translationPath     = props.translationPath;
  let translatedValue       = translateThis(translationPath, props);

  return (
    <Tag
      className               = { props.className }
      key                     = { props.keyProp }
      dangerouslySetInnerHTML = { translatedValue }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    language        : state.ui.language,
    translations    : state.server.translations,
    apiStatus       : state.server.apiStatus
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  let ownAndState = Object.assign({}, ownProps, stateProps);
  let ownAndStateAndDispatch = Object.assign({}, ownAndState, dispatchProps);
  return ownAndStateAndDispatch;
};

export default connect(mapStateToProps, mapDispatchToProps(null), mergeProps)(Translator);
