'use strict';

const assert              = require('assert');
const extractApp          = require('../../../../../server/models/parsers/client-to-server-parsers/extract-application');

let data;

describe('extracting application', function() {
  beforeEach(function() {

    data = {
      pathname: '',
      userID: '',
      basics: {
        dateOfBirth: {
          day: '',
          year: '',
          month: ''
        },
        legalName: {
          firstName: '',
          middleName: '',
          lastName: '',
          suffix: ''
        },
        socialSecurity: {
          hasSocialSecurity: '',
          part1: '',
          part2: '',
          part3: ''
        }
      },
      physicalTraits: {
        hairColor: '',
        eyeColor: '',
        sex: ''
      },
      traitsHeightWeight: {
        heightFeet: '',
        heightInches: '',
        weight: ''
      }
    };
  });

  describe('#social security', function() {
    it('saves blank if hasSocialSecurity is blank', function() {
      assert.equal(extractApp(data).social_security_number, '');
    });
    it('saves No if hasSocialSecurity is No', function() {
      data.basics.socialSecurity.hasSocialSecurity = 'No';
      assert.equal(extractApp(data).social_security_number, 'No');
    });
    it('saves number if hasSocialSecurity is Yes', function() {
      data.basics.socialSecurity = {
        hasSocialSecurity: 'Yes',
        part1: '111',
        part2: '11',
        part3: '1111'
      };
      assert.equal(extractApp(data).social_security_number, '111-11-1111');
    });
  });


  it('saves the pathname', function() {
    data.pathname = '/apply/cdl/voting-registration/opt-out';
    assert.equal(extractApp(data).pathname, data.pathname);
  });
});
