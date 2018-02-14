'use strict';

import assert           from 'assert';
import updateChooseParty from '../../../../client/reducers/application/voting/update-choose-party';

describe('updateChooseParty Reducer', function() {
  it('it clears the otherParty value when politicalPartyChoose is changed', function() {
    assert.deepEqual(
      updateChooseParty(
        {
          isSelected: 'Yes',
          politicalPartyChoose: 'Other',
          otherParty: 'David Bowie and the Ninja Turtles'
        },
        {
          type: 'UPDATE_POLITICAL_PARTY_CHOOSE',
          payload: {
            name: 'politicalPartyChoose',
            value: 'Peace and Freedom Party'
          }
        }
      ),
      {
        isSelected: 'Yes',
        politicalPartyChoose: 'Peace and Freedom Party',
        otherParty: ''
      }
    );
  });

  it('updates the state with other values', function() {
    assert.deepEqual(
      updateChooseParty(
        {
          isSelected: 'Yes',
          politicalPartyChoose: ''
        },
        {
          type: 'UPDATE_POLITICAL_PARTY_CHOOSE',
          payload: {
            name: 'politicalPartyChoose',
            value: 'Peace and Freedom Party'
          }
        }
      ),
      {
        isSelected: 'Yes',
        politicalPartyChoose: 'Peace and Freedom Party',
        otherParty: ''
      }
    );
  });
});


