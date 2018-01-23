'use strict';

import assert from 'assert';

import updateGuardianSignature from '../../../../client/reducers/application/update-guardian-signature';

function defaultState() {
  return {
    isSigned:  '',
    guardianInfo: [{
      id: '0',
      acceptLiabilities: '',
      signature: {
        name: '',
        month: '',
        day: '',
        year: '',
      },
      phoneNumber: '',
      address: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      },
      ID:{
        number: '',
        issuedBy: '',
        expirationMonth: '',
        expirationDay: '',
        expirationYear: ''
      }
    },
    {
      id: '1',
      acceptLiabilities: '',
      signature: {
        name: '',
        month: '',
        day: '',
        year: '',
      },
      phoneNumber: '',
      address: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      },
      ID:{
        number: '',
        issuedBy: '',
        expirationMonth: '',
        expirationDay: '',
        expirationYear: ''
      }
    }]
  };
}

describe('updateGuardianSignature', function() {
  it('it updates first guardian for accepting liabilities', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
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
          id: '0',
          acceptLiabilities: true,
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      }
    );
  });

  it('it updates second guardian for accepting liabilities', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
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
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: true,
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      },
    );
  });

  it('it updates first guardian name', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
        {
          type: 'UPDATE_GUARDIAN_SIGNATURE_FIRST',
          payload: {
            name: 'name_0',
            value: 'Parent Guardian One'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: 'Parent Guardian One',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      },
    );
  });

  it('it updates second guardian name', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
        {
          type: 'UPDATE_GUARDIAN_SIGNATURE_SECOND',
          payload: {
            name: 'name_1',
            value: 'Parent Guardian Two'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: 'Parent Guardian Two',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      },
    );
  });

  it('it updates first guardian phone number', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
        {
          type: 'UPDATE_GUARDIAN_CONTACT_DETAILS_FIRST',
          payload: {
            name: 'phoneNumber_0',
            value: '(916) 111-2222'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '(916) 111-2222',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      },
    );
  });

  it('it updates second guardian zip code', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
        {
          type: 'UPDATE_GUARDIAN_CONTACT_DETAILS_SECOND',
          payload: {
            name: 'guardian_1Zip',
            value: '99999'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '99999',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      },
    );
  });

  it('it updates first guardian ID number', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
        {
          type: 'UPDATE_GUARDIAN_ID_DOC_FIRST',
          payload: {
            name: 'number_0',
            value: '10101000111'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '10101000111',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      },
    );
  });

  it('it updates second guardian ID issuing authority', function() {
    assert.deepEqual(
      updateGuardianSignature(
        defaultState(),
        {
          type: 'UPDATE_GUARDIAN_ID_DOC_SECOND',
          payload: {
            name: 'issuedBy_1',
            value: 'U.S.A.'
          }
        }
      ),
      {
        isSigned:  '',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: 'U.S.A.',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      },
    );
  });



}); //End describe