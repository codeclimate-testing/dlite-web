'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';
import { translateArray }     from '../helpers/data/translator';

const ListItems = (props) => {
  const Tag = props.tag;
  return props.translatedValues.map((text, i) => {
    let content = {__html: text};
    return (
      <Tag
        key                     = { i }
        dangerouslySetInnerHTML = { content }
      />
    );
  });
};


const TranslatorList = (props) => {
  const tag                 = props.tag;
  const translationPath     = props.translationPath;
  let translatedValues      = translateArray(translationPath, props);
  return (
    <ListItems
      tag               = { tag }
      translatedValues  = { translatedValues }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    translations: state.server.translations
  };
};

export default connect(mapStateToProps)(TranslatorList);
