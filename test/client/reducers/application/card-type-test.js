'use strict';

import assert from 'assert';

import updateCardType from '../../../../client/reducers/application/update-card-type';

describe('cardTypeReducer', function() {
  it('it adds card type to hash of options when that name/value is passed', function() {
    assert.deepEqual(
      updateCardType(
        {
          ID: false,
          DL: false,
          youthIDInstead: ''
        },
        {
          type: 'UPDATE_CARD_TYPE',
          payload: {
            name: 'ID',
            value: 'true'
          }
        }
      ),
      {
        ID: true,
        DL: false,
        youthIDInstead: ''
      },
    );
  });

  it('it adds card type to hash of options when true value is passed instead of string', function() {
    assert.deepEqual(
      updateCardType(
        {
          ID: false,
          DL: false,
          youthIDInstead: ''
        },
        {
          type: 'UPDATE_CARD_TYPE',
          payload: {
            name: 'ID',
            value: true
          }
        }
      ),
      {
        ID: true,
        DL: false,
        youthIDInstead: ''
      },
    );
  });

  it('it adds the switch type flag if youthIDInstead is Yes', function() {
    const newState = updateCardType(
      {
        ID: false,
        DL: true,
        youthIDInstead: ''
      },
      {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'youthIDInstead',
          value: 'Yes'
        }
      }
    );
    assert.deepEqual(
      newState.youthIDInstead, 'Yes', 'youthIDInstead data element not saved'
    );
  });

  it('it switches the card type data if youthIDInstead is Yes', function() {
    const newState = updateCardType(
      {
        ID: false,
        DL: true,
        youthIDInstead: ''
      },
      {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'youthIDInstead',
          value: 'Yes'
        }
      }
    );

    assert.deepEqual(newState.ID, true, 'ID still not switched to true');
    assert.deepEqual(newState.DL, false, 'DL still not switche to false');
  });

  it('it adds the choice, but leaves the id/dl info as is if No is chosen', function() {
    const newState = updateCardType(
      {
        ID: false,
        DL: true,
        youthIDInstead: ''
      },
      {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'youthIDInstead',
          value: 'No'
        }
      }
    );

    assert.deepEqual(
      newState,
      {
        ID: false,
        DL: true,
        youthIDInstead: 'No'
      }
    );
  });
});


