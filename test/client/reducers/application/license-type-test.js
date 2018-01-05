'use strict';

import assert         from 'assert';
import updateCardType from '../../../../client/reducers/application/update-license-type';

describe('licenseTypeReducer', function() {
  it('it adds license type to type array', function() {
    assert.deepEqual(
      updateCardType(
        {
          type: [],
          endorsement: [],
          needEndorsement: ''
        },
        {
          type: 'UPDATE_LICENSE_TYPE',
          payload: {
            name: 'car',
            value: 'true'
          }
        }
      ),
      {
        type: ['car'],
        endorsement: [],
        needEndorsement: ''
      }
    );
  });

  it('it adds endorsement to endorsement array', function() {
    assert.deepEqual(
      updateCardType(
        {
          type: [],
          endorsement: [],
          needEndorsement: true
        },
        {
          type: 'UPDATE_LICENSE_TYPE',
          payload: {
            name: 'firefighter',
            value: 'true'
          }
        }
      ),
      {
        type: [],
        endorsement: ['firefighter'],
        needEndorsement: true
      }
    );
  });

  it('it passes the needEndorsement value', function() {
    assert.deepEqual(
      updateCardType(
        {
          type: [],
          endorsement: [],
          needEndorsement: ''
        },
        {
          type: 'UPDATE_LICENSE_TYPE',
          payload: {
            name: 'needEndorsement',
            value: true
          }
        }
      ),
      {
        type: [],
        endorsement: [],
        needEndorsement: true
      }
    );
  });

});


