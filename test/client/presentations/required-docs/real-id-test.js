'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import configure                from '../../support/configure-enzyme';
import RealID                   from '../../../../client/presentations/documents/real-id-documents.jsx';
import BulletList               from '../../../../client/presentations/documents/bullet-list.jsx';

describe('Required Docs for Real ID', function() {
  let component, realID;
  let props = {
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
    }
  };

  describe('BulletList', function() {
  
    it('is true when condition is Yes', function() {
      realID = {
        getRealID: 'Yes'
      };
      component = render(
        <BulletList
          {...props}
          realID={realID}
        />
      )
      assert.equal(component.text().includes('Real ID birth date'), true);
    });
  
    it('is false when condition is No', function() {
      realID = {
        getRealID: 'No'
      };
      component = render(
        <BulletList
          {...props}
          realID={realID}
        />
      )
      assert.equal(component.text().includes('Real ID birth date'), false);
    });

    it('is false when condition is blank', function() {
      realID = {
        getRealID: ''
      };
      component = render(
        <BulletList
          {...props}
          realID={realID}
        />
      )
      assert.equal(component.text().includes('Real ID birth date'), false);
    });

  });

  describe('Docs component', function() {
    it('is true when condition is Yes', function() {
      realID = {
        getRealID: 'Yes'
      };
      component = render(
        <RealID
          {...props}
          realID={realID}
        />
      )
      assert.equal(component.text().includes('Real ID birth date') && 
        !component.text().includes('All applicants need to prove their date of birth.'), 
        true);
    });
  
    it('is false when condition is No', function() {
      realID = {
        getRealID: 'No'
      };
      component = render(
        <RealID
          {...props}
          realID={realID}
        />
      )
      assert.equal(component.text().includes('Real ID birth date') && 
        !component.text().includes('All applicants need to prove their date of birth.'), 
        false);
    });

    it('is false when condition is blank', function() {
      realID = {
        getRealID: ''
      };
      component = render(
        <RealID
          {...props}
          realID={realID}
        />
      )
      assert.equal(component.text().includes('Real ID birth date') && 
        !component.text().includes('All applicants need to prove their date of birth.'), 
        false);
    });

  });
});
