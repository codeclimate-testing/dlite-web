'use strict';

import assert from 'assert';

import updateCardType from '../../../../client/reducers/application/update-card-type';

describe('cardTypeReducer', function() {
  describe('#youthID', function() {

    describe('##youthIDInstead user asking for just DL', function(){
      let state;
      let selectYes = {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'youthIDInstead',
          value: 'Yes'
        }
      };
      let selectNo = {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'youthIDInstead',
          value: 'No'
        }
      };

      beforeEach(function() {
        state = {
          IDDL: ['DL'],
          cardAction: 'new',
          youthIDInstead: '',
          ID: {
            isApplying: false,
            action: 'new'
          },
          DL: {
            isApplying: true,
            action: 'new'
          }
        };
      });

      it('it updates the youthIDInstead value if youthIDInstead is Yes', function() {
        const newState = updateCardType(state, selectYes);

        assert.deepEqual(
          newState.youthIDInstead, 'Yes', 'youthIDInstead data element not saved'
        );
      });

      it('it switches the card type data if youthIDInstead is Yes', function() {
        const newState = updateCardType(state, selectYes);

        assert.deepEqual(newState.IDDL, ['ID'], 'array not updated to have only ID card');
        assert.deepEqual(newState.DL, {isApplying: false, action: ''}, 'DL object doesnt revert to default state');
      });

      it('shows that the user still wants a DL if No is chosen', function() {
        const newState = updateCardType(state, selectNo);

        assert.deepEqual(
          newState,
          {
            IDDL: ['DL'],
            cardAction: 'new',
            youthIDInstead: 'No',
            DL: {
              isApplying: true,
              action: 'new'
            },
            ID: {
              isApplying: false,
              action: ''
            }
          }
        );
      });

      it ('reverts back to a DL if No is chosen after choosing Yes', function() {
        const state1 = updateCardType(state, selectYes);

        const state2 = updateCardType(state1, selectNo);

        assert.deepEqual(state2.IDDL, ['DL']);
        assert.deepEqual(state2.DL, {isApplying: true, action: 'new'});
        assert.deepEqual(state2.ID, {isApplying: false, action: ''});
        assert.deepEqual(state2.youthIDInstead, 'No');
      });
    });

    describe('## youthIDOnly when user is getting both ID and DL', function() {
      let state;
      const selectYes ={
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'youthIDOnly',
          value: 'Yes'
        }
      };
      const selectNo ={
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'youthIDOnly',
          value: 'No'
        }
      };

      beforeEach(function() {
        state = {
          IDDL: ['ID', 'DL'],
          cardAction: 'new',
          youthIDInstead: '',
          ID: {
            isApplying: true,
            action: 'new'
          },
          DL: {
            isApplying: true,
            action: 'new'
          }
        };
      });

      it('shows the user getting only an ID when user has selected Yes', function() {
        let newState = updateCardType(state, selectYes);

        assert.deepEqual(newState.IDDL, ['ID']);
        assert.deepEqual(newState.ID, {isApplying: true, action: 'new'});
        assert.deepEqual(newState.DL, {isApplying: false, action: ''});
      });

      it('shows the user getting both an ID and a DL when user has selected No', function() {
        let newState = updateCardType(state, selectNo);

        assert.deepEqual(newState.IDDL, ['ID', 'DL']);
        assert.deepEqual(newState.ID, {isApplying: true, action: 'new'});
        assert.deepEqual(newState.DL, {isApplying: true, action: 'new'});
      });

      it('shows the user getting only an ID after selecting No then Yes', function() {
        let newState1 = updateCardType(state, selectNo);

        let newState2 = updateCardType(newState1, selectYes);

        assert.deepEqual(newState2.IDDL, ['ID']);
        assert.deepEqual(newState2.ID, {isApplying: true, action: 'new'});
        assert.deepEqual(newState2.DL, {isApplying: false, action: ''});
      });
    });
  });


  describe('#IDDL', function(){
    let state;
    beforeEach(function() {
      state = {
        IDDL: [],
        cardAction: 'new',
        youthIDInstead: '',
        ID: {
          isApplying: false,
          action: ''
        },
        DL: {
          isApplying: false,
          action: ''
        }
      };
    });

    it('it adds ID to array and sets ID action when ID checkbox is updated', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'IDDL',
          value: 'ID-true'
        }
      });

      assert.deepEqual(newState.IDDL, ['ID']);
      assert.deepEqual(newState.ID, {
        isApplying: true,
        action: 'new'
      });
      assert.deepEqual(newState.DL, { isApplying: false, action: ''});
    });

    it('passing true value as boolean behaves the same way as as a string (test above)', function() {
      assert.deepEqual(
        updateCardType(state,
          {
            type: 'UPDATE_CARD_TYPE',
            payload: {
              name: 'IDDL',
              value: 'ID-'+true
            }
          }
        ),
        {
          IDDL: ['ID'],
          cardAction: 'new',
          youthIDInstead: '',
          ID: {
            isApplying: true,
            action: 'new'
          },
          DL: {
            isApplying: false,
            action: ''
          }
        }
      );
    });

    it('updates IDDL array when ID radio box is selected', function() {
      let newState = updateCardType({
        IDDL: ['DL'],
        cardAction: 'renew',
        DL: {
          action: 'renew'
        },
        ID: {
          action: ''
        }
      }, {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'IDDL',
          value: 'ID'
        }
      });
      assert.deepEqual(newState.IDDL, ['ID']);
    });

    it('updates the card objects when DL radio box is selected', function() {
      let newState = updateCardType({
        IDDL: ['ID'],
        cardAction: 'change',
        DL: {
          action: ''
        },
        ID: {
          action: 'change'
        }
      }, {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'IDDL',
          value: 'DL'
        }
      });

      assert.deepEqual(newState.DL, { action: 'change', isApplying: true});
      assert.deepEqual(newState.ID, { action: '', isApplying: false});
    });

    it('updates the card object action when the card type is chosen', function() {
      const newState = updateCardType(
        {
          IDDL: [''],
          cardAction: 'renew',
          youthIDInstead: '',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: false,
            action: ''
          }
        },
        {
          type: 'UPDATE_CARD_TYPE',
          payload: {
            name: 'IDDL',
            value: 'DL'
          }
        }
      );
      assert.deepEqual(
        newState.IDDL[0], 'DL', 'IDDL array value not changed'
      );
      assert.deepEqual(newState.DL, {isApplying: true, action: 'renew'})
    });
  });

  describe('#cardAction', function() {
    it('changes the cardAction value when updated', function() {
      let newState = updateCardType({
        IDDL: [],
        cardAction: '',
        DL: {action: ''},
        ID: {action: ''}
      }, {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'cardAction',
          value: 'replace'
        }
      });

      assert.deepEqual(newState.cardAction, 'replace');
    });

    it('clears the IDDL array when cardAction changed from new where both ID and DL were selected', function() {
      let newState = updateCardType({
        IDDL: ['ID', 'DL'],
        cardAction: 'new',
        DL: {action: 'new'},
        ID: {action: 'new'}
      }, {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'cardAction',
          value: 'renew'
        }
      });

      assert.deepEqual(newState.IDDL, []);
    });
  });

  it('clears the card objects when cardAction changed from new where both ID and DL were selected', function() {
    let newState = updateCardType({
      IDDL: ['ID', 'DL'],
      cardAction: 'new',
      DL: {action: 'new'},
      ID: {action: 'new'}
    }, {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: 'cardAction',
        value: 'renew'
      }
    });
    assert.deepEqual(newState.ID, {action: '', isApplying: false});
    assert.deepEqual(newState.DL, {action: '', isApplying: false});
  });

  it('updates the ID object when card action is changed from renew to replace', function() {
    let newState = updateCardType({
      IDDL: ['ID'],
      cardAction: 'renew',
      DL: {action: ''},
      ID: {action: 'renew'}
    }, {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: 'cardAction',
        value: 'replace'
      }
    });

    assert.deepEqual(newState.ID.action, 'replace');
    assert.deepEqual(newState.DL.action, '');
  });
});


