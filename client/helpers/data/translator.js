'use strict';

export const keyLookup = (translationPath, translation) => {
  try {
    let translationPaths  = translationPath.split('.');
    let tempObject        = translation;

    for (var i in translationPaths){
      tempObject = tempObject[translationPaths[i]]
    }
    return tempObject ? tempObject : '';
  }
  catch(err) {
    return '';
  }
}

export const translateThis = (translationPath, props) => {
  const defaultTranslation    = props.translations.default;
  const selectedTranslation   = props.translations.selected;
  const appLanguage           = props.language;

  let value = '';

  if(appLanguage !== 'en') {
    value = keyLookup(translationPath, selectedTranslation);
  }

  if(!value) {
    value = keyLookup(translationPath, defaultTranslation);
  }

  //TODO: Remove this after all translations has valid key
  if(!value) {
    return { __html: translationPath};
  }

  return { __html: value };
}

export const translateArray = (translationPath, props) => {
  const defaultTranslation    = props.translations.default;
  const selectedTranslation   = props.translations.selected;
  const appLanguage           = props.language;

  let values = [];

  if(appLanguage !== 'en') {
    values = keyLookup(translationPath, selectedTranslation);
  }

  if(values.length === 0) {
    values = keyLookup(translationPath, defaultTranslation);
  }

  return values && Array.isArray(values) ? values : [];
}

export const needToLoadTranslation = (props) => {
  return (  props.language !== 'en' &&
            !props.translations.selected.hasOwnProperty('shared') &&
            props.apiStatus !== 'loading'
  );
};