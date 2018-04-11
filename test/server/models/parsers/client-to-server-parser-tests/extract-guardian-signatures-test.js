'use strict';

const assert     = require('assert');
const extract    = require('../../../../../server/models/parsers/client-to-server-parsers/extract-guardian-signatures');

describe('extracting guardian signatures: ', function() {
  let data;

  beforeEach(function() {
    data = {
      id: '101',
      guardianSignature: {
        isSigned: '',
        guardianInfo: [
          {
            id: '0',
            acceptLiabilities: false,
            signature: {
              name:  '',
              month: '',
              day:   '',
              year:  ''
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
              name:  '',
              month: '',
              day:   '',
              year:  ''
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
      }
    }
  });

  it('returns null if not electronically signed', (done) => {
    data.guardianSignature.isSigned = 'signAtDMV';
    assert.equal(extract(data), null);
    done();
  });

  it('returns array of length one if only one guardian signs the application', (done) => {

    data.guardianSignature.isSigned = 'signElectronically';

    data.guardianSignature.guardianInfo[0].acceptLiabilities = true;
    data.guardianSignature.guardianInfo[0].signature.name    = 'Guardian One';
    data.guardianSignature.guardianInfo[0].signature.month   = '10';
    data.guardianSignature.guardianInfo[0].signature.day     = '23';
    data.guardianSignature.guardianInfo[0].signature.year    = '2019';
    data.guardianSignature.guardianInfo[0].phoneNumber       = '918 222 2019';
    data.guardianSignature.guardianInfo[0].address.street_1  = '909 This Way';
    data.guardianSignature.guardianInfo[0].address.street_2  = 'Right Lane';
    data.guardianSignature.guardianInfo[0].address.city      = 'Forever City';
    data.guardianSignature.guardianInfo[0].address.state     = 'CA';
    data.guardianSignature.guardianInfo[0].address.zip       = '55555';

    assert.equal(extract(data).length, 1);
    assert.deepEqual(extract(data),
      [{
        application_id:           '101',
        guardian_type:            'first',
        accept_civil_liability:   true,
        guardian_name:            'Guardian One',
        signed_on:                new Date('10/23/2019'),
        phone_number:             '918 222 2019',
      }]
    );
    done();
  });

  it('returns array of length two if both guardian signs the application', (done) => {

    data.guardianSignature.isSigned = 'signElectronically';

    data.guardianSignature.guardianInfo[0].acceptLiabilities = true;
    data.guardianSignature.guardianInfo[0].signature.name    = 'Guardian One';
    data.guardianSignature.guardianInfo[0].signature.month   = '10';
    data.guardianSignature.guardianInfo[0].signature.day     = '23';
    data.guardianSignature.guardianInfo[0].signature.year    = '2019';
    data.guardianSignature.guardianInfo[0].phoneNumber       = '918 222 2019';
    data.guardianSignature.guardianInfo[0].address.street_1  = '909 This Way';
    data.guardianSignature.guardianInfo[0].address.street_2  = 'Right Lane';
    data.guardianSignature.guardianInfo[0].address.city      = 'Forever City';
    data.guardianSignature.guardianInfo[0].address.state     = 'CA';
    data.guardianSignature.guardianInfo[0].address.zip       = '55555';

    data.guardianSignature.guardianInfo[1].acceptLiabilities = true;
    data.guardianSignature.guardianInfo[1].signature.name    = 'Guardian Two';
    data.guardianSignature.guardianInfo[1].signature.month   = '11';
    data.guardianSignature.guardianInfo[1].signature.day     = '24';
    data.guardianSignature.guardianInfo[1].signature.year    = '2018';
    data.guardianSignature.guardianInfo[1].phoneNumber       = '918 222 2020';
    data.guardianSignature.guardianInfo[1].address.street_1  = '909 That Way';
    data.guardianSignature.guardianInfo[1].address.street_2  = 'Left Lane';
    data.guardianSignature.guardianInfo[1].address.city      = 'Happy City';
    data.guardianSignature.guardianInfo[1].address.state     = 'CA';
    data.guardianSignature.guardianInfo[1].address.zip       = '44444';

    assert.equal(extract(data).length, 2);
    assert.deepEqual(extract(data),
      [{
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
        phone_number:             '918 222 2020',
      }]
    );
    done();
  });

});
