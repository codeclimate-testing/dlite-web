'use strict';

import assert           from 'assert';
import sinon            from 'sinon';
import onLoggedIn       from '../../../../client/helpers/handlers/on-logged-in';
import getTranslation   from '../../../../client/actions/get-translation';

describe('onLoggedIn', function() {
  let dispatch, onLoad, spy;
  let history = [];
  let uuid = '101';

  beforeEach(function() {
    dispatch = () => {
      return Promise.resolve({});
    };

    onLoad = onLoggedIn(dispatch);
  });

  // it('updates language with cookie language value', function() {
  //   document.cookie = 'language=es';
  //   onLoad(uuid, history);
  //   assert(dispatch.calledWith({
  //     type: 'UPDATE_LANGUAGE',
  //     payload: {
  //       name: 'language',
  //       value: 'es'
  //     }
  //   }), 'update language dispatch not called');
  // });

  // it('gets translation for non-english language', function() {
  //   let translate = sinon.stub(getTranslation, 'getTranslation').returns(() => Promise.resolve({}) )
  //   dispatch(translate)
  //   document.cookie = 'language=es';
  //   onLoad(uuid, history);
  //   assert.ok(translate.calledWith({
  //     type: 'UPDATE_LOADING_STATUS',
  //     payload: {
  //       name: 'apiStatus',
  //       value: 'loading'
  //     }
  //   }), 'update loading status not called');
  // });
});


