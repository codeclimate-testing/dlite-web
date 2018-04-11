'use strict';

const assert                  = require('assert');
const getGuardianSignature    = require('../../../../../server/models/parsers/server-to-client-parsers/get-guardian-signatures');

describe('extracting guardian signatures', function() {

  let guardian_signatures, guardian_addresses;

  beforeEach(function() {
    guardian_signatures = [],
    guardian_addresses  = []
  });

  it('returns placeholder if application.guardian_signatures is null', () => {
    assert.deepEqual(getGuardianSignature(guardian_signatures, guardian_addresses), {
        isSigned: '',
        guardianInfo: [
          {
            id: '0',
            acceptLiabilities: false,
            signature: {
              name:   '',
              month:  '',
              day:    '',
              year:   ''
            },
            phoneNumber: '',
            address: {
              street_1: '',
              street_2: '',
              city:     '',
              state:    '',
              zip:      ''
            }
          },
          {
            id: '1',
            acceptLiabilities: false,
            signature: {
              name:   '',
              month:  '',
              day:    '',
              year:   ''
            },
            phoneNumber: '',
            address: {
              street_1: '',
              street_2: '',
              city:     '',
              state:    '',
              zip:      ''
            }
          }
        ]
    });
  });

  it('return guardian signature object with first guardian info when only one is saved', () => {
    guardian_signatures = [{
      application_id:           '101',
      guardian_type:            'first',
      accept_civil_liability:   true,
      guardian_name:            'Guardian One',
      signed_on:                new Date('10/23/2019'),
      phone_number:             '918 222 2019',
    }],
    guardian_addresses = [{
      guardian_id:        '',
      guardian_type:      'first',
      street_address_1:   '909 This Way',
      street_address_2:   'Right Lane',
      city:               'Forever City',
      state:              'CA',
      zip:                '55555'
    }]

    assert.deepEqual(getGuardianSignature(guardian_signatures, guardian_addresses), {
      isSigned: 'signElectronically',
      guardianInfo: [
        {
          id: '0',
          acceptLiabilities: true,
          signature: {
            name:   'Guardian One',
            month:  '10',
            day:    '23',
            year:   '2019'
          },
          phoneNumber: '918 222 2019',
          address: {
            street_1: '909 This Way',
            street_2: 'Right Lane',
            city:     'Forever City',
            state:    'CA',
            zip:      '55555'
          }
        },
        {
          id: '1',
          acceptLiabilities: false,
          signature: {
            name:   '',
            month:  '',
            day:    '',
            year:   ''
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city:     '',
            state:    '',
            zip:      ''
          }
        }
      ]
    });
  });

  it('return guardian signature object with both guardians info when both are saved', () => {
    guardian_signatures = [{
      application_id:           '101',
      guardian_type:            'first',
      accept_civil_liability:   true,
      guardian_name:            'Guardian One',
      signed_on:                new Date('10/23/2019'),
      phone_number:             '918 222 2019',
    },
    {
      application_id:           '101',
      guardian_type:            'second',
      accept_civil_liability:   true,
      guardian_name:            'Guardian Two',
      signed_on:                new Date('11/24/2018'),
      phone_number:             '918 222 2018',
    }],
    guardian_addresses = [{
      guardian_id:        '',
      guardian_type:      'first',
      street_address_1:   '909 This Way',
      street_address_2:   'Right Lane',
      city:               'Forever City',
      state:              'CA',
      zip:                '55555'
    },
    {
      guardian_id:        '',
      guardian_type:      'second',
      street_address_1:   '909 That Way',
      street_address_2:   'Left Lane',
      city:               'Happy City',
      state:              'CA',
      zip:                '44444'
    }]

    assert.deepEqual(getGuardianSignature(guardian_signatures, guardian_addresses), {
      isSigned: 'signElectronically',
      guardianInfo: [
        {
          id: '0',
          acceptLiabilities: true,
          signature: {
            name:   'Guardian One',
            month:  '10',
            day:    '23',
            year:   '2019'
          },
          phoneNumber: '918 222 2019',
          address: {
            street_1: '909 This Way',
            street_2: 'Right Lane',
            city:     'Forever City',
            state:    'CA',
            zip:      '55555'
          }
        },
        {
          id: '1',
          acceptLiabilities: true,
          signature: {
            name:   'Guardian Two',
            month:  '11',
            day:    '24',
            year:   '2018'
          },
          phoneNumber: '918 222 2018',
          address: {
            street_1: '909 That Way',
            street_2: 'Left Lane',
            city:     'Happy City',
            state:    'CA',
            zip:      '44444'
          }
        }
      ]
    });
  });
});
