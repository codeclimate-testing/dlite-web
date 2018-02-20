'use strict';

const assert = require('assert');

import {
  addIDWdywtdt,
  addSeniorID
} from '../../../../client/helpers/navigations/add-id/next-path';

describe('Add ID Card next-paths', function() {
  describe('#addIDWdywtdt', function() {
    it('returns "addSeniorID" if user is a senior', function() {
      let props = {
        dateOfBirth: {
          month: '04',
          day: '10',
          year: '1950'
        },
        cardType: ['ID']
      };
      assert.equal(addIDWdywtdt(props), 'addSeniorID');
    });

    it('returns "addReducedFee" if user is not a senior', function() {
      let props = {
        dateOfBirth: {
          month: '04',
          day: '10',
          year: (new Date().getFullYear() - 30).toString()
        }
      };
      assert.equal(addIDWdywtdt(props), 'addReducedFee');
    });
  });

  describe('#addSeniorID', function() {
    it('returns "summary" if user is getting a senior ID', function() {
      let props = {
        IDApp: {
          seniorID: 'Yes'
        }
      };
      assert.equal(addSeniorID(props), "summary");
    });

    it('returns "addReducedFee" if user is getting a senior ID', function() {
      let props = {
        IDApp: {
          seniorID: 'No'
        }
      };
      assert.equal(addSeniorID(props), "addReducedFee");
    });
  });
});