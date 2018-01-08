'use strict';

import assert from 'assert';

import updateGuardianSignature from '../../../../client/reducers/application/update-guardian-signature';


describe('updateGuardianSignature', function() {
  it('it updates first guardian details', function() {
    assert.deepEqual(
      updateGuardianSignature(
        {
          isSigned:  '',
          guardianInfo: [{
            id: 'first',
            acceptLiabilities: '',
            signature: '',
            signatureDateMonth: '',
            signatureDateDay: '',
            signatureDateYear: '',
            phoneNumber: '',
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
            IDNumber: '',
            IDIssuedBy: '',
            IDExpirationDateMonth: '',
            IDExpirationDateDay: '',
            IDExpirationDateYear: ''
          },
          {
            id: 'second',
            acceptLiabilities: '',
            signature: '',
            signatureDateMonth: '',
            signatureDateDay: '',
            signatureDateYear: '',
            phoneNumber: '',
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
            IDNumber: '',
            IDIssuedBy: '',
            IDExpirationDateMonth: '',
            IDExpirationDateDay: '',
            IDExpirationDateYear: ''
          }]
        },
        {
          type: 'UPDATE_GUARDIAN_SIGNATURE_FIRST',
          payload: {
            name: 'acceptLiabilities',
            value: 'acceptLiabilities_0-true'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: 'first',
          acceptLiabilities: true,
          signature: '',
          signatureDateMonth: '',
          signatureDateDay: '',
          signatureDateYear: '',
          phoneNumber: '',
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
          IDNumber: '',
          IDIssuedBy: '',
          IDExpirationDateMonth: '',
          IDExpirationDateDay: '',
          IDExpirationDateYear: ''
        },
        {
          id: 'second',
          acceptLiabilities: '',
          signature: '',
          signatureDateMonth: '',
          signatureDateDay: '',
          signatureDateYear: '',
          phoneNumber: '',
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
          IDNumber: '',
          IDIssuedBy: '',
          IDExpirationDateMonth: '',
          IDExpirationDateDay: '',
          IDExpirationDateYear: ''
        }]
      },
    );
  });

  it('it updates first guardian details', function() {
    assert.deepEqual(
      updateGuardianSignature(
        {
          isSigned:  '',
          guardianInfo: [{
            id: 'first',
            acceptLiabilities: true,
            signature: '',
            signatureDateMonth: '',
            signatureDateDay: '',
            signatureDateYear: '',
            phoneNumber: '',
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
            IDNumber: '',
            IDIssuedBy: '',
            IDExpirationDateMonth: '',
            IDExpirationDateDay: '',
            IDExpirationDateYear: ''
          },
          {
            id: 'second',
            acceptLiabilities: '',
            signature: '',
            signatureDateMonth: '',
            signatureDateDay: '',
            signatureDateYear: '',
            phoneNumber: '',
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
            IDNumber: '',
            IDIssuedBy: '',
            IDExpirationDateMonth: '',
            IDExpirationDateDay: '',
            IDExpirationDateYear: ''
          }]
        },
        {
          type: 'UPDATE_GUARDIAN_SIGNATURE_SECOND',
          payload: {
            name: 'acceptLiabilities',
            value: 'acceptLiabilities_1-true'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: 'first',
          acceptLiabilities: true,
          signature: '',
          signatureDateMonth: '',
          signatureDateDay: '',
          signatureDateYear: '',
          phoneNumber: '',
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
          IDNumber: '',
          IDIssuedBy: '',
          IDExpirationDateMonth: '',
          IDExpirationDateDay: '',
          IDExpirationDateYear: ''
        },
        {
          id: 'second',
          acceptLiabilities: true,
          signature: '',
          signatureDateMonth: '',
          signatureDateDay: '',
          signatureDateYear: '',
          phoneNumber: '',
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
          IDNumber: '',
          IDIssuedBy: '',
          IDExpirationDateMonth: '',
          IDExpirationDateDay: '',
          IDExpirationDateYear: ''
        }]
      },
    );
  });

});