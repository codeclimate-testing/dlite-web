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

  return { __html: value };
}

export const needToLoadTranslation = (props) => {
  return (  props.language !== 'en' &&
            !props.translations.selected.hasOwnProperty('shared') &&
            props.apiStatus !== 'loading'
  );
};
