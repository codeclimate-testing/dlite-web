'use strict';

const assert              = require('assert');
const getCDLType          = require('../../../../../server/models/parsers/server-to-client-parsers/get-cdl-type');

describe('extracting license classes', function() {

  describe('#CDL app', function() {
    const license_classes = [{
      type: 'classA'
    },
    {
      type: 'inter'
    },
    {
      type: 'ambulance'
    },
    {
      type: 'tank'
    },
    {
      type: 'schoolBus'
    },
    {
      type: 'motorcycle'
    }];

    const CDLObject = getCDLType(license_classes);

    it('saves licenseClass', function() {
      assert.equal(CDLObject.licenseClass, 'classA');
    });

    it('saves classM', function() {
      assert.equal(CDLObject.classM, 'Yes');
    });

    it('saves certification', function() {
      assert.equal(CDLObject.certification, 'inter');
    });

    it('saves cdlEndorsements', function() {
      assert.deepEqual(CDLObject.cdlEndorsements, {
        type: ['tank', 'schoolBus'],
        needEndorsement: 'Yes'
      });
    });

    it('saves cdlCertificates', function() {
      assert.deepEqual(CDLObject.cdlCertificates, {
        type: ['ambulance'],
        needCertificates: 'Yes'
      });
    });
  });
});
