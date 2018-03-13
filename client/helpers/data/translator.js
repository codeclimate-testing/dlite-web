'use strict';

export const keyLookup = (contentKey, translation) => {
  try {
    let contentKeys = contentKey.split('.');
    let tempObject  = translation;

    for (var i in contentKeys){
      tempObject = tempObject[contentKeys[i]]
    }
    return tempObject ? tempObject : '';
  }
  catch(err) {
    return '';
  }
}

export const translateThis = (contentKey, props) => {
  const defaultTranslation    = props.translations.default;
  const selectedTranslation   = props.translations.selected;
  const appLanguage           = props.language;

  let value = '';

  if(appLanguage !== 'en') {
    value = keyLookup(contentKey, selectedTranslation);
  }

  if(!value) {
    value = keyLookup(contentKey, defaultTranslation);
  }

  return { __html: value };
}
