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

  describe('app_mode', function() {
    it('saves app_mode "public"', function() {
      process.env.TST_ENV = false;
      process.env.ADA_TST = false;
      assert.equal(extractApp(data).app_mode, 'public');
    });
    it('saves app_mode "tst" when TST_ENV is true and ADA_TST is false', function() {
      process.env.TST_ENV = true;
      process.env.ADA_TST = false;
      assert.equal(extractApp(data).app_mode, 'tst');
    });
    it('saves app_mode "ada" when TST_ENV is true and ADA_TST is true', function() {
      process.env.TST_ENV = true;
      process.env.ADA_TST = true;
      assert.equal(extractApp(data).app_mode, 'ada');
    });
  });
});
