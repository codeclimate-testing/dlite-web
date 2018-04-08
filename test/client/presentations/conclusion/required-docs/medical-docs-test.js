'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import wrapperGenerator         from '../../../support/wrapper';
import store                    from '../../../support/page-store';
import { render }               from 'enzyme';
import MedDocs                  from '../../../../../client/presentations/conclusion/documents/medical-documents.jsx';
import BulletList               from '../../../../../client/presentations/conclusion/documents/bullet-list.jsx';

describe('Required Docs for Medical Condition', function() {
  const Wrapper = wrapperGenerator(store);
  let component, medicalHistory;
  let props = {
    reducedFee: {
      ID: 'No'
    },
    realID: {
      getRealID: 'No'
    },
    veteransService : {
      isVeteran: 'No',
      veteransIdentifier: ''
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
      medicalHistory = {
        hasMedicalCondition: 'Yes'
      };
      component = render(
        <Wrapper>
          <BulletList
            {...props}
            medicalHistory={medicalHistory}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Medical Information'), true);
    });

    it('is false when condition is No', function() {
      medicalHistory = {
        hasMedicalCondition: 'No'
      };
      component = render(
        <Wrapper>
          <BulletList
            {...props}
            medicalHistory={medicalHistory}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Medical Information'), false);
    });

    it('is false when condition is blank', function() {
      medicalHistory = {
        hasMedicalCondition: ''
      };
      component = render(
        <Wrapper>
          <BulletList
            {...props}
            medicalHistory={medicalHistory}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Medical Information'), false);
    });

  });

  describe('Docs component', function() {
    it('is true when condition is Yes', function() {
      medicalHistory = {
        hasMedicalCondition: 'Yes'
      };
      component = render(
        <Wrapper>
          <MedDocs
            {...props}
            medicalHistory={medicalHistory}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Medical Information'), true);
    });

    it('is false when condition is No', function() {
      medicalHistory = {
        hasMedicalCondition: 'No'
      };
      component = render(
        <MedDocs
          {...props}
          medicalHistory={medicalHistory}
        />
      )
      assert.equal(component.text().includes('Medical Information'), false);
    });

    it('is true when condition is blank', function() {
      medicalHistory = {
        hasMedicalCondition: ''
      };
      component = render(
        <MedDocs
          {...props}
          medicalHistory={medicalHistory}
        />
      )
      assert.equal(component.text().includes('Medical Information'), false);
    });
  });
});

