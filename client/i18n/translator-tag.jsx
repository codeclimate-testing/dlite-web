'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';
import { translateThis }      from '../helpers/data/translator';

const Translate = (props) => {
  const Tag           = props.tag;
  const contentKey    = props.contentKey;
  let translatedValue = translateThis(contentKey, props);
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
    language:     state.application.basics.language,
    translations: state.server.translations
  };
};

export default connect(mapStateToProps)(Translate);
