'use strict';

import assert         from 'assert';
import updateCardType from '../../../../client/reducers/application/dl-app/update-license-type';

describe('licenseTypeReducer', function() {
  it('it adds license type to type array', function() {
    assert.deepEqual(
      updateCardType(
        {
          type: [],
          needEndorsement: ''
        },
        {
          type: 'UPDATE_LICENSE_TYPE',
          payload: {
            name: 'type',
            value: 'car-true'
          }
        }
      ),
      {
        type: ['car'],
        needEndorsement: ''
      }
    );
  });

  it('it passes the needEndorsement value', function() {
    assert.deepEqual(
      updateCardType(
        {
          type: [],
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
        needEndorsement: true
      }
    );
  });

});


