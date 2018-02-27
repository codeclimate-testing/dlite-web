'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/guardian-signature-rules';
import messages from '../../../../client/presentations/error-messages';

let props = {};

describe('enter guardian signature page validation rules:', function() {

  beforeEach(function() {
    props = {
      accordions: ['guardian-signature-add'],
      guardianSignature: {
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
          }
        }]
      }
    };
  });

  it('has no errors, when there are no data issues', function() {

    props.guardianSignature.isSigned = 'Yes';

    props.guardianSignature.guardianInfo[0].acceptLiabilities = true;
    props.guardianSignature.guardianInfo[0].signature.name = 'A';
    props.guardianSignature.guardianInfo[0].signature.month = '1';
    props.guardianSignature.guardianInfo[0].signature.day = '25';
    props.guardianSignature.guardianInfo[0].signature.year = '2018';
    props.guardianSignature.guardianInfo[0].phoneNumber = '(916) 111-2222';
    props.guardianSignature.guardianInfo[0].address.street_1 = '123 Main St';
    props.guardianSignature.guardianInfo[0].address.street_2 = 'B';
    props.guardianSignature.guardianInfo[0].address.city = 'Sacramento';
    props.guardianSignature.guardianInfo[0].address.state = 'CA';
    props.guardianSignature.guardianInfo[0].address.zip = '99999';

    props.guardianSignature.guardianInfo[1].acceptLiabilities = true;
    props.guardianSignature.guardianInfo[1].signature.name = 'X';
    props.guardianSignature.guardianInfo[1].signature.month = '2';
    props.guardianSignature.guardianInfo[1].signature.day = '25';
    props.guardianSignature.guardianInfo[1].signature.year = '2018';
    props.guardianSignature.guardianInfo[1].phoneNumber = '(916) 222-3333';
    props.guardianSignature.guardianInfo[1].address.street_1 = '321 Main St.';
    props.guardianSignature.guardianInfo[1].address.street_2 = 'Y';
    props.guardianSignature.guardianInfo[1].address.city = 'Sacramento';
    props.guardianSignature.guardianInfo[1].address.state = 'CA';
    props.guardianSignature.guardianInfo[1].address.zip = '11111';

    assert.deepEqual(rules.isSigned(props), []);
    assert.deepEqual(rules.acceptLiabilities_0(props), []);
    assert.deepEqual(rules.name_0(props), []);
    assert.deepEqual(rules.month_0(props), []);
    assert.deepEqual(rules.day_0(props), []);
    assert.deepEqual(rules.year_0(props), []);
    assert.deepEqual(rules.phoneNumber_0(props), []);
    assert.deepEqual(rules.guardian_0Street_1(props), []);
    assert.deepEqual(rules.guardian_0Street_2(props), []);
    assert.deepEqual(rules.guardian_0City(props), []);
    assert.deepEqual(rules.guardian_0Zip(props), []);
    assert.deepEqual(rules.acceptLiabilities_1(props), []);
    assert.deepEqual(rules.name_1(props), []);
    assert.deepEqual(rules.month_1(props), []);
    assert.deepEqual(rules.day_1(props), []);
    assert.deepEqual(rules.year_1(props), []);
    assert.deepEqual(rules.phoneNumber_1(props), []);
    assert.deepEqual(rules.guardian_1Street_1(props), []);
    assert.deepEqual(rules.guardian_1Street_2(props), []);
    assert.deepEqual(rules.guardian_1City(props), []);
    assert.deepEqual(rules.guardian_1Zip(props), []);
  });

  it('has errors, when there is no data entered', function() {
    assert.deepEqual(rules.isSigned(props), ['Please make a selection']);

    assert.deepEqual(rules.acceptLiabilities_0(props), ['Please check the box to accept liability.']);
    assert.deepEqual(rules.name_0(props), ['Please enter your name.']);
    assert.deepEqual(rules.month_0(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.day_0(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.year_0(props), ['Please enter a valid date.']);

    assert.deepEqual(rules.acceptLiabilities_1(props), ['Please check the box to accept liability.']);
    assert.deepEqual(rules.name_1(props), ['Please enter your name.']);
    assert.deepEqual(rules.month_1(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.day_1(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.year_1(props), ['Please enter a valid date.']);
  });

  it('has errors, when non-english data are entered', function() {
    props.guardianSignature.guardianInfo[0].signature.name = '嗨';
    props.guardianSignature.guardianInfo[0].signature.month = '嗨';
    props.guardianSignature.guardianInfo[0].signature.day = '嗨';
    props.guardianSignature.guardianInfo[0].signature.year = '嗨';
    props.guardianSignature.guardianInfo[0].phoneNumber = '嗨';
    props.guardianSignature.guardianInfo[0].address.street_1 = '嗨';
    props.guardianSignature.guardianInfo[0].address.street_2 = '嗨';
    props.guardianSignature.guardianInfo[0].address.city = '嗨';
    props.guardianSignature.guardianInfo[0].address.state = '嗨';
    props.guardianSignature.guardianInfo[0].address.zip = '嗨';

    props.guardianSignature.guardianInfo[1].signature.name = '嗨';
    props.guardianSignature.guardianInfo[1].signature.month = '嗨';
    props.guardianSignature.guardianInfo[1].signature.day = '嗨';
    props.guardianSignature.guardianInfo[1].signature.year = '嗨';
    props.guardianSignature.guardianInfo[1].phoneNumber = '嗨';
    props.guardianSignature.guardianInfo[1].address.street_1 = '嗨';
    props.guardianSignature.guardianInfo[1].address.street_2 = '嗨';
    props.guardianSignature.guardianInfo[1].address.city = '嗨';
    props.guardianSignature.guardianInfo[1].address.state = '嗨';
    props.guardianSignature.guardianInfo[1].address.zip = '嗨';

    assert.deepEqual(rules.name_0(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.month_0(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.day_0(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.year_0(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.phoneNumber_0(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_0Street_1(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_0Street_2(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_0City(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_0Zip(props), ['Sorry, your card can only include English characters.']);

     assert.deepEqual(rules.name_1(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.month_1(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.day_1(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.year_1(props), ['Please enter a valid date.']);
    assert.deepEqual(rules.phoneNumber_1(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_1Street_1(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_1Street_2(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_1City(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.guardian_1Zip(props), ['Sorry, your card can only include English characters.']);
  });
});//End describe
