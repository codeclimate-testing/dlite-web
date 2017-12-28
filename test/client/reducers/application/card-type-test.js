'use strict';

import assert from 'assert';

import updateCardType from '../../../../client/reducers/application/update-card-type';

describe('cardTypeReducer', function() {
  it('it adds card type to hash of options when that name/value is passed', function() {
    assert.deepEqual(
      updateCardType(
        {
          new: [],
          renew: '',
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
        new: ['ID'],
        renew: '',
        youthIDInstead: ''
      },
    );
  });

  it('it adds card type to hash of options when true value is passed instead of string', function() {
    assert.deepEqual(
      updateCardType(
        {
          new: [],
          renew: '',
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
        new: ['ID'],
        renew: '',
        youthIDInstead: ''
      },
    );
  });

  it('it adds the switch type flag if youthIDInstead is Yes', function() {
    const newState = updateCardType(
      {
        new: ['DL'],
        renew: '',
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
        new: ['DL'],
        renew: '',
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

    assert.deepEqual(newState.new, ['ID'], 'array not updated to have only ID card');
  });

  it('it adds the choice, but leaves the id/dl info as is if No is chosen', function() {
    const newState = updateCardType(
      {
        new: ['DL'],
        renew: '',
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
        new: ['DL'],
        renew: '',
        youthIDInstead: 'No'
      }
    );
  });

  it('switches the cardType renew', function() {
    const newState = updateCardType(
      {
        new: [''],
        renew: 'ID',
        youthIDInstead: ''
      },
      {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'renew',
          value: 'DL'
        }
      }
    );
    assert.deepEqual(
      newState.renew, 'DL', 'renew value not changed'
    );
  });
});


