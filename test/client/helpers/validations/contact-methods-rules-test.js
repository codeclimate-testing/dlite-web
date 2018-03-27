'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/contact-rules';

describe('Contact Methods page validation rules:', function() {
  it('when nothing has been selected, it shows the generic selection missing error', function() {
    let props = {
      shouldContact: ''
    };

    assert.deepEqual(rules.shouldContact(props), ['errorMessages.selectionMissing']);
  });

  describe('when should contact has been selected', function() {
    let props;
    beforeEach(function() {
      props = {
        shouldContact: 'Yes',
        emailAddress: '',
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: ''
      };
    });

    it('the "please enter either an email address or a phone number" message shows when neither email nor phone has been entered', function() {
      assert.deepEqual(rules.emailAddress(props), ['errorMessages.emailAddressMissingOrInvalid']);
      assert.deepEqual(rules.phoneNumber1(props), ['errorMessages.phoneMissingOrInvalid']);
    });

    it('shows inputIncludesNonEnglishCharacters error if non-English characters used in email', function() {
      props.emailAddress = 'łażenko@kropka.pl';
      assert.deepEqual(rules.emailAddress(props), ['errorMessages.inputIncludesNonEnglishCharacters']);
    });

    it('shows emailAddressMissingOrInvalid error if address fails regex check', function(){
      props.emailAddress = '[]@mail.com';
      assert.deepEqual(rules.emailAddress(props), ['errorMessages.emailAddressMissingOrInvalid']);
    });

    it('does not give email error if a phone number has been entered', function() {
      props.phoneNumber1 = '1';
      props.phoneNumber2 = '2';
      props.phoneNumber3 = '200';
      assert.deepEqual(rules.emailAddress(props), []);
    });

    it('gives phoneMissingOrInvalid error if phone number inputs dont have correct number of digits', function() {
      props.phoneNumber1 = '11';
      props.phoneNumber2 = '99999';
      props.phoneNumber3 = '12';
      assert.deepEqual(rules.phoneNumber1(props), ['errorMessages.phoneMissingOrInvalid']);
      assert.deepEqual(rules.phoneNumber2(props), ['errorMessages.phoneMissingOrInvalid']);
      assert.deepEqual(rules.phoneNumber3(props), ['errorMessages.phoneMissingOrInvalid']);
    });

    it('does not give error if email exists but invalid phone entered', function() {
      props.phoneNumber1 = '11';
      props.emailAddress = 'me@mydomain.com';
      assert.deepEqual(rules.phoneNumber1(props), []);
    });

    it('does not give phone error if email exists and no phone entered', function() {
      props.phoneNumber1 = '';
      props.emailAddress = 'another@hiking.com';
      assert.deepEqual(rules.phoneNumber1(props), []);
    });

    it('does not give phone error if inputs match lengths of 3-3-4', function(){
      props.phoneNumber1 = '111';
      props.phoneNumber2 = '999';
      props.phoneNumber3 = '1212';
      assert.deepEqual(rules.phoneNumber1(props), []);
      assert.deepEqual(rules.phoneNumber2(props), []);
      assert.deepEqual(rules.phoneNumber3(props), []);
    });
  });
});

