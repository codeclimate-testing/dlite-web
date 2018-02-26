'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import ReducedFee               from '../../../../../client/presentations/conclusion/documents/reduced-fee.jsx';
import BulletList               from '../../../../../client/presentations/conclusion/documents/bullet-list.jsx';

describe('Required Docs for Reduced Fee', function() {
  let component, reducedFee;
  let props = {
    realID: {
      getRealID: 'No',
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
    }
  };

  describe('BulletList', function() {
    it('is true when condition is Yes', function() {
      reducedFee =  {
        ID: 'Yes'
      };
      component = render(
        <BulletList
          {...props}
          reducedFee = {reducedFee}
        />
      )
      assert.equal(component.text().includes('No fee eligibility'), true);
    });

    it('is false when condition is No', function() {
      reducedFee =  {
        ID: 'No'
      };
      component = render(
        <BulletList
          {...props}
          reducedFee = {reducedFee}
        />
      )
      assert.equal(component.text().includes('No fee eligibility'), false);
    });

    it('is true when condition is empty', function() {
      reducedFee =  {
        ID: ''
      };
      component = render(
        <BulletList
          {...props}
          reducedFee = {reducedFee}
        />
      )
      assert.equal(component.text().includes('No fee eligibility'), false);
    });
  });

  describe('Docs component', function() {
    it('is true when condition is Yes', function() {
      reducedFee =  {
        ID: 'Yes'
      };
      component = render(
        <ReducedFee
          {...props}
          reducedFee = {reducedFee}
        />
      )
      assert.equal(component.text().includes('No fee eligibility'), true);
    });

    it('is false when condition is No', function() {
      reducedFee =  {
        ID: 'No'
      };
      component = render(
        <ReducedFee
          {...props}
          reducedFee = {reducedFee}
        />
      )
      assert.equal(component.text().includes('No fee eligibility'), false);
    });

    it('is false when condition is blank', function() {
      reducedFee =  {
        ID: ''
      };
      component = render(
        <ReducedFee
          {...props}
          reducedFee = {reducedFee}
        />
      )
      assert.equal(component.text().includes('No fee eligibility'), false);
    });
  });
});

