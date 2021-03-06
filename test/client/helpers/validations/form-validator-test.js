'use strict';

import assert from 'assert';

import rules         from '../../../../client/helpers/validations/name-page-rules';
import formValidator from '../../../../client/helpers/validations/form-validator';

describe('FormValidator:', function() {
  it('generates a class with the right methods', function() {
    let props = {
      firstName: '',
      middleName: '',
      lastName: ''
    };

    let requestedValidations = [];

    let FormValidator = formValidator(rules);
    let validator = new FormValidator(props, requestedValidations);

    assert(validator.firstName, 'firstName method not present');
    assert(validator.middleName, 'middleName method not present');
    assert(validator.lastName, 'lastName method not present');
    assert(validator.all, 'all method not present');
  });

  it('will return empty strings for each if there are no errors', function() {
    let props = {
      firstName: 'Jackson',
      middleName: 'Hendricks',
      lastName: 'Wilson'
    };

    let requestedValidations = ['firstName', 'middleName', 'lastName'];

    let FormValidator = formValidator(rules);
    let validator = new FormValidator(props, requestedValidations);

    assert.equal(validator.firstName(), '');
    assert.equal(validator.middleName(), '');
    assert.equal(validator.lastName(), '');
    assert.equal(validator.all(), '');
  });

  it('will ignore errors when those fields are not requested for validation', function() {
    let props = {
      firstName: 'Jack§on',
      middleName: 'H£ndricks',
      lastName: ''
    };

    let requestedValidations = [];

    let FormValidator = formValidator(rules);
    let validator = new FormValidator(props, requestedValidations);

    assert.equal(validator.firstName(), '');
    assert.equal(validator.middleName(), '');
    assert.equal(validator.lastName(), '');
    assert.equal(validator.all(), '');
  });

  it('will return errors only for the fields requested', function() {
    let props = {
      firstName: 'Jack§on',
      middleName: 'H£ndricks',
      lastName: ''
    };

    let requestedValidations = ['firstName'];

    let FormValidator = formValidator(rules);
    let validator = new FormValidator(props, requestedValidations);

    assert.equal(validator.firstName(), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.equal(validator.middleName(), '');
    assert.equal(validator.lastName(), '');
    assert.equal(validator.all(), '');
  });

  it('when "all" requested, all of the errors will show up, and the "all" message will be generic for multiple errors', function() {
    let props = {
      firstName: 'Jack§on',
      middleName: 'H£ndricks',
      lastName: ''
    };

    let requestedValidations = ['all'];

    let FormValidator = formValidator(rules);
    let validator = new FormValidator(props, requestedValidations);

    assert.equal(validator.firstName(), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.equal(validator.middleName(), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.equal(validator.lastName(), ['errorMessages.lastNameMissing']);
    assert.equal(validator.all(), ['errorMessages.errorPreventContinuing']);
  });

  it('when "all" requested and there is only one message, it will use that message', function() {
    let props = {
      firstName: '',
      middleName: '',
      lastName: ''
    };

    let requestedValidations = ['all'];

    let FormValidator = formValidator(rules);
    let validator = new FormValidator(props, requestedValidations);

    assert.equal(validator.firstName(), '');
    assert.equal(validator.middleName(), '');
    assert.equal(validator.lastName(), ['errorMessages.lastNameMissing']);
    assert.equal(validator.all(), ['errorMessages.lastNameMissing']);
  });

  describe('#isValid', function() {
    it('returns false if there are any errors', function() {
      let props = {
        firstName: '',
        middleName: '',
        lastName: ''
      };

      let requestedValidations = ['all'];

      let FormValidator = formValidator(rules);
      let validator = new FormValidator(props, requestedValidations);

      assert.equal(validator.isValid(), false, 'isValid returned true with errors');
    });

    it('return false if there are any errors, even if no validations are requested', function() {
      let props = {
        firstName: '',
        middleName: '',
        lastName: ''
      };

      let requestedValidations = [];

      let FormValidator = formValidator(rules);
      let validator = new FormValidator(props, requestedValidations);

      assert.equal(validator.isValid(), false, 'isValid returned true with errors');
    });

    it('return true if there are no errors', function() {
      let props = {
        firstName: '',
        middleName: '',
        lastName: 'Jonesing'
      };

      let requestedValidations = [];

      let FormValidator = formValidator(rules);
      let validator = new FormValidator(props, requestedValidations);

      assert.equal(validator.isValid(), true, 'isValid returned false');
    });
  });
});

