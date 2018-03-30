'use strict';

import assert           from 'assert';
import sinon            from 'sinon';
import loadTranslation  from '../../../../client/helpers/handlers/load-translation-from-cookie';

describe('load translation from cookie', function() {
  let value, dispatch, language, action;

  beforeEach(function() {
    language = ''
    dispatch = sinon.spy();
    action = loadTranslation(dispatch);
  });

  it('doesnt dispatch anything if language value already exists in redux', function() {
    language = 'zh';
    action(language);
    assert.ok(!dispatch.isCalled);
  });

  it('dispatches the UPDATE_LANGUAGE action with the cookie value', function() {
    document.cookie = 'language=vi';
    action(language);

    assert.ok(dispatch.calledWith({
      type: 'UPDATE_LANGUAGE',
      payload: {
        name: 'language',
        value: 'vi'}
    }));
  });

  it('calls the getTranslation action', function() {
    action(language);
    assert.ok(dispatch.calledWith({
      type: 'UPDATE_API_STATUS',
      payload: {
        value: 'loading'
      }
    }));
  });
});


