'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/height-weight-rules';
import messages from '../../../../client/presentations/error-messages';

describe('height weight traits page validation rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      heightFeet: '6',
      heightInches: '6',
      weight: '190'
    };

    assert.deepEqual(rules.heightFeet(props), []);
    assert.deepEqual(rules.heightInches(props), []);
    assert.deepEqual(rules.weight(props), []);
  });

  it('when heightFeet is less than 0, it gives the heightMissing error', function() {
    let props = {
      heightFeet: '-6',
      heightInches: '6',
      weight: '190'
    };

    assert.deepEqual(rules.heightFeet(props), [messages.heightMissing]);
    assert.deepEqual(rules.heightInches(props), []);
    assert.deepEqual(rules.weight(props), []);
  });

  it('when heightFeet is greater than 10, it gives the heightMissing error', function() {
    let props = {
      heightFeet: '13',
      heightInches: '6',
      weight: '190'
    };

    assert.deepEqual(rules.heightFeet(props), [messages.heightMissing]);
    assert.deepEqual(rules.heightInches(props), []);
    assert.deepEqual(rules.weight(props), []);
  });

  it('when heightInches is less than 0, it gives the heightMissing error', function() {
    let props = {
      heightFeet: '6',
      heightInches: '-6',
      weight: '190'
    };

    assert.deepEqual(rules.heightFeet(props), []);
    assert.deepEqual(rules.heightInches(props), [messages.heightMissing]);
    assert.deepEqual(rules.weight(props), []);
  });

  it('when heightInches is greater than 12, it gives the heightMissing error', function() {
    let props = {
      heightFeet: '6',
      heightInches: '16',
      weight: '190'
    };

    assert.deepEqual(rules.heightFeet(props), []);
    assert.deepEqual(rules.heightInches(props), [messages.heightMissing]);
    assert.deepEqual(rules.weight(props), []);
  });

  it('when weight is less than 0, it gives the weightMissing error', function() {
    let props = {
      heightFeet: '6',
      heightInches: '6',
      weight: '-2'
    };

    assert.deepEqual(rules.heightFeet(props), []);
    assert.deepEqual(rules.heightInches(props), []);
    assert.deepEqual(rules.weight(props), [messages.weightMissing]);
  });

  it('when weight is greater than 2000, it gives the weightMissing error', function() {
    let props = {
      heightFeet: '6',
      heightInches: '6',
      weight: '9000'
    };

    assert.deepEqual(rules.heightFeet(props), []);
    assert.deepEqual(rules.heightInches(props), []);
    assert.deepEqual(rules.weight(props), [messages.weightMissing]);
  });
});

