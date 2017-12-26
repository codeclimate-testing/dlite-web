'use strict';

import assert from 'assert';
import accordionsReducer from '../../../../client/reducers/ui/accordions';

describe('accordionsReducer', function() {
  it('ignores all non accordion events', function() {
    assert.deepEqual(
      accordionsReducer([], {type: 'WHATEVER'}),
      [],
    );
  });

  it('adds accordion ids that are not present yet', function() {
    assert.deepEqual(
      accordionsReducer([], {type: 'TOGGLE_ACCORDION', payload: {value: 'new-open-accordion'}}),
      ['new-open-accordion'],
    );
  });

  it('removes accordion ids that are present', function() {
    assert.deepEqual(
      accordionsReducer(['existing-accordion'], {type: 'TOGGLE_ACCORDION', payload: {value: 'existing-accordion'}}),
      [],
    );
  });
});
