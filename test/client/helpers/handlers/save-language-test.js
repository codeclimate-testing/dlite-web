'use strict';

import assert             from 'assert';
import sinon              from 'sinon';
import saveLanguage       from '../../../../client/helpers/handlers/save-language';


describe('saveLanguage handler', function() {
  let dispatch;
  beforeEach(function() {
    dispatch = sinon.spy();
  });

  it('dispatches updateLanguage with the cookie value', function() {
    document.cookie = 'language=es';
    saveLanguage(dispatch)();
    assert.equal(dispatch.args[0][0].payload.value, 'es');
  });
});
