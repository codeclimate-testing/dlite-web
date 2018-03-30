'use strict';
import { hasValue }               from './validations';
import { languageIsSelected }     from './application';
import { updateLanguage }         from '../../actions/index';
import getTranslation             from '../../actions/get-translation';
import { getLanguageFromCookie }  from './cookies';

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
  const translationLanguage   = props.translations.translationLanguage;

  let value = '';

  if( hasNonEnglishLanguage(translationLanguage) ) {
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
  const translationLanguage   = props.translations.translationLanguage;

  let values = [];

  if( hasNonEnglishLanguage(translationLanguage) ) {
    values = keyLookup(translationPath, selectedTranslation);
  }

  if(values.length === 0) {
    values = keyLookup(translationPath, defaultTranslation);
  }

  return values && Array.isArray(values) ? values : [];
}

const hasNonEnglishLanguage = (language) => {
  return hasValue(language) && language !== 'en';
}

export const needToLoadTranslation = (props) => {
  return (  hasNonEnglishLanguage(props.language) &&
            !props.translations.selected.hasOwnProperty('shared') &&
            props.apiStatus !== 'loading'
  );
};


export const loadTranslationFromCookie = (props) => {
  let cookieLanguage = getLanguageFromCookie();
  if (!languageIsSelected(props.language)) {
    props.dispatch(updateLanguage('language', cookieLanguage));
    return getTranslation(cookieLanguage)(props.dispatch);
  }
}