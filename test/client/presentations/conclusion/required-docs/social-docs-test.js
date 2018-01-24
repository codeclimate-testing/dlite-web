'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import SocialSecurityDocuments  from '../../../../../client/presentations/conclusion/documents/social-security-documents.jsx';
import BulletList               from '../../../../../client/presentations/conclusion/documents/bullet-list.jsx';

describe('Required Docs for Social Security Number', function() {
  let component, socialSecurity;
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
    reducedFee: {
      ID: false
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
      socialSecurity = {
        hasSocialSecurity: 'Yes'
      },
      component = render(
        <BulletList
          {...props}
          socialSecurity = {socialSecurity}
        />
      )
      assert.equal(component.text().includes('Proof of Social Security Number'), true);
    });

    it('is false when condition is No', function() {
      socialSecurity = {
        hasSocialSecurity: 'No'
      },
      component = render(
        <BulletList
          {...props}
          socialSecurity = {socialSecurity}
        />
      )
      assert.equal(component.text().includes('Proof of Social Security Number'), false);
    });
  });

  describe('Required docs for Social Security', function() {
    it('is true when condition is Yes', function() {
      socialSecurity = {
        hasSocialSecurity: 'Yes'
      },
      component = render(
        <SocialSecurityDocuments
          socialSecurity = {socialSecurity}
        />
      )
      assert.equal(component.text().includes('Proof of Social Security Number'), true);
    });

    it('is null when condition is No', function() {
      socialSecurity = {
        hasSocialSecurity: 'No'
      },
      component = render(
        <SocialSecurityDocuments
          socialSecurity = {socialSecurity}
        />
      )
      assert.equal(component, false);
    });

    it('is null when condition is blank', function() {
      socialSecurity = {
        hasSocialSecurity: ''
      },
      component = render(
        <SocialSecurityDocuments
          socialSecurity = {socialSecurity}
        />
      )
      assert.equal(component, false);
    });
  });
});

