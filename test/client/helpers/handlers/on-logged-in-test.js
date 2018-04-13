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

});


