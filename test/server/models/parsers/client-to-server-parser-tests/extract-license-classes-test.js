'use strict';

const assert              = require('assert');
const extractClasses      = require('../../../../../server/models/parsers/client-to-server-parsers/extract-license-classes');

describe('extracting license classes', function() {

  describe('#IDDP app', function() {
    const app = {
      DLApp: {
        licenseType: {
          type: ['car', 'cycle'],
          needEndorsement: 'Yes'
        }
      }
    };
    const array = extractClasses(app);

    it('saves type car', function() {
      assert.equal(array[0].type, 'car');
    });

    it('saves type cycle', function() {
      assert.equal(array[1].type, 'cycle');
    });
    it('saves firefighter', function() {
      assert.equal(array[2].type, 'firefighter');
    });

  });

  describe('#CDL app', function() {
    const app = {
      licenseClass: 'classA',
      cdlEndorsements: {
        type: ['bus'],
        needEndorsement: 'Yes'
      },
      cdlCertificates: {
        type: [],
        needCertificates: ''
      },
      certification: 'inter',
      classM: 'Yes'
    };
    const array = extractClasses(app);
    it('saves type classA', function() {
      assert.equal(array[0].type, app.licenseClass);
    });

    it('saves certification', function() {
      assert.equal(array[1].type, app.certification);
    });

    it('saves motorcycle', function() {
      assert.equal(array[2].type, 'motorcycle');
    });

    it('saves endorsement', function() {
      assert.equal(array[3].type, 'bus');
    });

    it('does not save any certificates if array is blank', function() {
      assert.equal(array.length, 4);
    });
  });
});
