'use strict';

import assert               from 'assert';
import selectionValidator   from '../../../../client/helpers/validations/selection-validator';
import messages             from '../../../../client/presentations/error-messages';

describe('selection validator:', function() {
  it('will give the error message that is passed in the first argument if the prop string is empty', function() {
    let props = '';

    assert.deepEqual(selectionValidator('selectionMissing')(props), [messages.selectionMissing]);
  });

  it('will give the error message if the value of the key passed as second argument is empty in the prop object', function() {
    let props = {
      level1: ''
    };

    assert.deepEqual(selectionValidator('selectionMissing', 'level1')(props), [messages.selectionMissing]);
  });

  it('will give the error message if the value of the key passed as 3rd argument is empty', function() {
    let props = {
      level1: {
        level2: ''
      }
    };

    assert.deepEqual(selectionValidator('selectionMissing', 'level1', 'level2')(props), [messages.selectionMissing]);
  });
});

