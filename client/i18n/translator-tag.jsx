'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';
import mapDispatchToProps           from '../helpers/handlers/map-dispatch-to-props';
import {
  translateThis
} from '../helpers/data/translator';

const Translator = (props) => {

  const Tag                 = props.tag;
  const translationPath     = props.translationPath;
  let translatedValue       = translateThis(translationPath, props);

  return (
    <Tag
      id                      = { props.id }
      className               = { props.className }
      key                     = { props.keyProp }
      dangerouslySetInnerHTML = { translatedValue }
      accordion               = { props.accordion }
      tabIndex                = { props.tabIndex }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    translations    : state.server.translations,
    language        : state.ui.language
  };
};

export default connect(mapStateToProps)(Translator);
