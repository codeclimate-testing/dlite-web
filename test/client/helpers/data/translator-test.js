'use strict';

import assert     from 'assert';

import en_json    from '../../../../client/i18n/en.json';
import es_json    from '../../../../client/i18n/es.json';
import {
  keyLookup,
  translateThis,
  needToLoadTranslation
}    from '../../../../client/helpers/data/translator';

describe('Translator', () => {
  describe('keyLookUp()', () => {
    let translation = es_json;

    it('return translated value for the content key', (done) => {
      let contentKey  = 'votingRegistration.citizenshipPage.pagePrompt';
      assert.equal(keyLookup(contentKey, translation), '¿Es ciudadano de los Estados Unidos?');
      done();
    });

    it('empty string for the content key not found', (done) => {
      let contentKey  = 'votingRegistration.citizenshipPage.pagePrompt1';
      assert.equal(keyLookup(contentKey, translation), '');
      done();
    });

    it('empty string when an exception happens', (done) => {
      let contentKey  = 'votingRegistration1.citizenshipPage1.pagePrompt1';
      assert.equal(keyLookup(contentKey, translation), '');
      done();
    });

  });

  describe('translateThis()', () => {
    let props = {
      language: 'es',
      translations: {
        default: en_json,
        selected: es_json
      }
    };

    it('returns translated value from selected language, if its available', (done) => {
      let contentKey  = 'votingRegistration.eligibilityPage.convictionStatement';
      assert.equal(translateThis(contentKey, props).__html, 'No estoy actualmente en una prisión estatal o federal o en libertad condicional por haber sido condenado de un delito mayor');
      done();
    });

    it('returns translated value from default language, if its not available in selected', (done) => {
      let contentKey  = 'applicationPreparationPage.prompt';
      assert.equal(translateThis(contentKey, props).__html, 'Appointment preparation');
      done();
    });

    it('returns a same string if translation is not available in selected and default language', (done) => {
      let contentKey  = 'This is a simple string and expects no translation';
      assert.equal(translateThis(contentKey, props).__html, 'This is a simple string and expects no translation');
      done();
    });

  });

  describe('#needToLoadTranslation', function() {
    let props;
    beforeEach(function() {
      props = {
        language: 'en',
        translations: {
          default: en_json,
          selected: ''
        },
        apiStatus: 'success'
      };
    });

    it('returns false if props.language is en', function() {
      assert.equal(needToLoadTranslation(props), false);
    });
    it('returns false if translations.selected already exists', function() {
      props.translations.selected = es_json;
      assert.equal(needToLoadTranslation(props), false);
    });
    it('returns false if apiStatus is loading', function() {
      props.apiStatus = 'loading';
      assert.equal(needToLoadTranslation(props), false);
    });
    it('returns true if props.language is not english, the selected object is empty, and the apiStatus is not loading', function() {
      props.language = 'vi';
      assert.equal(needToLoadTranslation(props), true);
    });
  });
});
