'use strict';

import assert               from 'assert';
import updateTranslations   from '../../../../client/reducers/server/update-translations';
import en_json              from '../../../../client/i18n/en.json';
import es_json              from '../../../../client/i18n/es.json';

describe('#UpdateTranslationsReducer', function() {
  let action, state;
  beforeEach(function() {
    state = {
      selected: { },
      default:  en_json
    };
    action = {
      type: 'GET_TRANSLATION_SUCCESS',
      payload: {
        value: ''
      }
    };
  });
  it('saves value to redux', function() {
    action.payload.value = es_json;
    assert.deepEqual(
      updateTranslations(state, action),
      { selected: es_json,
        default: en_json }
    );
  });
});


