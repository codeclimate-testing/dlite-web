'use strict';

'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import getTranslation           from '../../../client/actions/get-translation';

describe('getTranslation() action', function() {
  let dispatch, fetcher, response, url;

  beforeEach(function() {
    response = {
      status: 200,
      json: () => { return {'hello': 'world'}}
    };
    dispatch = spy();
  });

  it('calls fetch on the right api endpoint', function() {
    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response)
    };

    let actionFunction = getTranslation('es', fetcher);
    actionFunction(dispatch);
    assert.equal(url, '/api/translation/es');
  });

  it('dispatches an api loading action', function() {
    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response)
    };

    let actionFunction = getTranslation('es', fetcher);
    actionFunction(dispatch);

    let apiAction = dispatch.getCall(0).args[0];
    assert.deepEqual(apiAction, {
      type: 'UPDATE_API_STATUS',
      payload: {
        value: 'loading'
      }
    });
  });

  describe('api request success', function() {
    let actionFunction;

    beforeEach(function() {
      fetcher = (fetchPath) => {
        url = fetchPath;
        return Promise.resolve(response)
      };
      actionFunction = getTranslation('es', fetcher);
    });

    it('on request success dispatches an action to store the translation data', function(done) {
      actionFunction(dispatch)
        .then(() => {
          let action = dispatch.getCall(1).args[0];

          assert.deepEqual(action, {
            type: 'GET_TRANSLATION_SUCCESS',
            payload: { value: { hello: 'world' } }
          });
        })
        .then(done)
        .catch(done);
    });

    it('dispatches updateTranslationLanguage to store the selected language', function(done) {
      actionFunction(dispatch)
        .then(() => {
          let action = dispatch.getCall(2).args[0];

          assert.deepEqual(action, {
            type: 'UPDATE_TRANSLATION_LANGAUGE',
            payload: { value: 'es'}
          });
        })
        .then(done)
        .catch(done);
    });

    it('on request success dispatches an api success action', function(done) {
      actionFunction(dispatch)
        .then(() => {
          let action = dispatch.getCall(3).args[0];

          assert.deepEqual(action, {
            type: 'UPDATE_API_STATUS',
            payload: {
              value: 'success'
            }
          });
        })
        .then(done)
        .catch(done);
    });
  });

  describe('api request error', function() {
    let actionFunction;

    beforeEach(function() {
      response = {
        status: 500,
        json: () => { return {'message': 'Language not found'}}
      };

      fetcher = (fetchPath) => {
        url = fetchPath;
        return Promise.resolve(response)
      };
      actionFunction = getTranslation('xx', fetcher);
    });

    it('on request success dispatches an action to store the translation data', function(done) {
      actionFunction(dispatch)
        .then(() => {
          let action = dispatch.getCall(1).args[0];

          assert.deepEqual(action, {
            type: 'GET_TRANSLATION_ERROR',
            payload: { value: 'Language not found' }
          });
        })
        .then(done)
        .catch(done);
    });

    it('on request success dispatches an api success action', function(done) {
      actionFunction(dispatch)
        .then(() => {
          let action = dispatch.getCall(2).args[0];

          assert.deepEqual(action, {
            type: 'UPDATE_API_STATUS',
            payload: {
              value: 'error'
            }
          });
        })
        .then(done)
        .catch(done);
    });
  });
});

