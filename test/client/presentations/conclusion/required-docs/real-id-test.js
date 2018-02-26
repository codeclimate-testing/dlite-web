'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import RealID                   from '../../../../../client/presentations/conclusion/documents/real-id-documents.jsx';
import BulletList               from '../../../../../client/presentations/conclusion/documents/bullet-list.jsx';

describe('Required Docs for Real ID', function() {
  let component, props;
  beforeEach(function() {
    props = {
      reducedFee: {
        ID: 'No'
      },
      veteransService : {
        isVeteran: 'No',
        veteransIdentifier: ''
      },
      medicalHistory: {
        hasMedicalCondition: 'No'
      },
      socialSecurity: {
        hasSocialSecurity: 'No'
      },
      licenseIssued: '',
      dateOfBirth: {
        year: 1988,
        month: 9,
        day: 29
      },
      IDApp: {
        realID: ''
      },
      DLApp: {
        realID: ''
      },
      realID: ''
    };
  });

  describe('BulletList', function() {
    it('is true when condition is Yes', function() {
      props.IDApp.realID = 'Yes';
      component = render(
        <BulletList
          {...props}
        />
      )
      assert.equal(component.text().includes('Real ID birth date'), true);
    });

    it('is false when condition is No', function() {
      props.IDApp.realID = 'No';
      props.DLApp.realID = 'No';
      component = render(
        <BulletList
          {...props}
        />
      )
      assert.equal(component.text().includes('Real ID birth date'), false);
    });

    it('is false when condition is blank', function() {

      component = render(
        <BulletList
          {...props}
        />
      )
      assert.equal(component.text().includes('Real ID birth date'), false);
    });
  });

  describe('Docs component', function() {
    it('is true when condition is Yes', function() {
      props.IDApp.realID = 'Yes';
      component = render(
        <RealID
          {...props}
        />
      )
      assert.equal(component.text().includes('Real ID birth date') &&
        !component.text().includes('All applicants need to prove their date of birth.'),
        true);
    });

    it('is false when condition is No', function() {
      props.IDApp.realID = 'No';
      component = render(
        <RealID
          {...props}
        />
      )
      assert.equal(component.text().includes('Real ID birth date') &&
        !component.text().includes('All applicants need to prove their date of birth.'),
        false);
    });

    it('is false when condition is blank', function() {
      component = render(
        <RealID
          {...props}
        />
      )
      assert.equal(component.text().includes('Real ID birth date') &&
        !component.text().includes('All applicants need to prove their date of birth.'),
        false);
    });
  });
});

