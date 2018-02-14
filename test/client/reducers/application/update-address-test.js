'use strict';

import assert from 'assert';

import updateAddress from '../../../../client/reducers/application/basics/update-address';

describe('addressReducer', function() {
  it('it updates mailing address to be same as home address', function() {
    assert.deepEqual(
      updateAddress(
        {
          homeAddressSameAsMailing: '',
          home: {
            street_1: '123 main street',
            street_2: 'Unit No. 45',
            city: 'Cray',
            state: 'CA',
            zip: 93366,
          },
          mailing: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          }
        },
        {
          type: 'UPDATE_ADDRESS',
          payload: {
            name: 'homeAddressSameAsMailing',
            value: 'Yes'
          }
        }
      ),
      {
        homeAddressSameAsMailing: 'Yes',
        home: {
          street_1: '123 main street',
          street_2: 'Unit No. 45',
          city: 'Cray',
          state: 'CA',
          zip: 93366,
        },
        mailing: {
          street_1: '123 main street',
          street_2: 'Unit No. 45',
          city: 'Cray',
          state: 'CA',
          zip: 93366,
        }
      },
    );
  });

  it('it resets mailing address to default when its not same as home address', function() {
    assert.deepEqual(
      updateAddress(
        {
          homeAddressSameAsMailing: 'Yes',
          home: {
            street_1: '123 main street',
            street_2: 'Unit No. 45',
            city: 'Cray',
            state: 'CA',
            zip: 93366,
          },
          mailing: {
            street_1: '123 main street',
            street_2: 'Unit No. 45',
            city: 'Cray',
            state: 'CA',
            zip: 93366,
          }
        },
        {
          type: 'UPDATE_ADDRESS',
          payload: {
            name: 'homeAddressSameAsMailing',
            value: 'No'
          }
        }
      ),
      {
        homeAddressSameAsMailing: 'No',
        home: {
          street_1: '123 main street',
          street_2: 'Unit No. 45',
          city: 'Cray',
          state: 'CA',
          zip: 93366,
        },
        mailing: {
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
        }
      },
    );
  });
});


