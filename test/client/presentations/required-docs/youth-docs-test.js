'use strict';

import 'jsdom-global/register';
import assert     from 'assert';
import React      from 'react';
import configure  from '../../support/configure-enzyme';
import { render } from 'enzyme';

import YouthDocuments       from '../../../../client/presentations/documents/youth-documents.jsx';
import BulletList           from '../../../../client/presentations/documents/bullet-list.jsx';

describe('Required Docs for Youth', function() {
  let component, dob;
  let mockNow = new Date(2017, 11, 14);
  let license = '';
  let knowledgeTest = 'You will need to take a knowledge test';
  let newDriver = 'New driver requirements';
  let props = {
    realID: {
      getRealID: 'No',
    },
    socialSecurity: {
      hasSocialSecurity: 'No'
    },
    veteransService: {
      isVeteran: 'No'
    },
    medicalHistory: {
      hasMedicalCondition: 'No'
    },
    reducedFee: {
      ID: 'No'
    }
  };

  describe('Bullet List', function() {
    it('shows new driver reqs when dob is day turning 17.5', function() {
      dob = {
        year: 2000,
        month: 6,
        day: 14
      };
      component = render(
        <BulletList
          {...props}
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
 
      assert.equal(component.text().includes(newDriver), true);
    });
    it('shows new driver reqs when dob is day turning 15.5', function() {
      dob = {
        year: 2002,
        month: 6,
        day: 14
      };
      component = render(
        <BulletList
          {...props}
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver), true);
    });
    it('does not show new driver reqs when dob is day turning 18', function() {
      dob = {
        year: 1999,
        month: 12,
        day: 14
      };
      component = render(
        <BulletList
          {...props}
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver), false);
    });
    it('does not show knowledge test when dob is day turning 17.5', function() {
      dob = {
        year: 2000,
        month: 6,
        day: 14
      };
      component = render(
        <BulletList
          {...props}
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(knowledgeTest), false);
    });
    it('shows knowledge test when dob is day turning 15.5', function() {
      dob = {
        year: 2002,
        month: 6,
        day: 14
      };
      component = render(
        <BulletList
          {...props}
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(knowledgeTest), true);
    });
    it('doesnt show knowledge test or new driver when dob is day under 15.5', function(){
      dob = {
        year: 2002,
        month: 6,
        day: 15
      };
      component = render(
        <BulletList
          {...props}
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver) || component.text().includes(knowledgeTest), false);
    });
    it('doesnt show either when dob is day turning 18', function() {
      dob = {
        year: 1999,
        month: 12,
        day: 14
      };
      component = render(
        <BulletList
          {...props}
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver) || component.text().includes(knowledgeTest), false);
    });
  });
});

describe('YouthDocuments', function() {
  let component, dob;
  let mockNow = new Date(2017, 11, 14);
  let license = '';
  let knowledgeTest = 'You will need to take a knowledge test';
  let newDriver = 'New driver requirements';

  describe('shows new driver requirements to users between 15.5 and 18', function() {
    it('is true when dob is day turning 17.5', function() {
      dob = {
        year: 2000,
        month: 6,
        day: 14
      };
      component = render(
        <YouthDocuments
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
 
      assert.equal(component.text().includes(newDriver), true);
    });

    it('is true when dob is day turning 15.5', function() {
      dob = {
        year: 2002,
        month: 6,
        day: 14
      };
      component = render(
        <YouthDocuments
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver), true);
    });

    it('is false when dob is day turning 18', function() {
      dob = {
        year: 1999,
        month: 12,
        day: 14
      };
      component = render(
        <YouthDocuments
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver), false);
    });
  });

  
  describe('shows knowledge test to users between 15.5 and 17.5', function() {
    it('is false when dob is day turning 17.5', function() {
      dob = {
        year: 2000,
        month: 6,
        day: 14
      };
      component = render(
        <YouthDocuments
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(knowledgeTest), false);
    });
    it('is true when dob is day turning 15.5', function() {
      dob = {
        year: 2002,
        month: 6,
        day: 14
      };
      component = render(
        <YouthDocuments
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(knowledgeTest), true);
    });
  });
  

  describe('doesnt show new driver requirements or knowledge test when user not between 15.5 and 18', function() {
    it('is false when dob is day under 15.5', function(){
      dob = {
        year: 2002,
        month: 6,
        day: 15
      };
      component = render(
        <YouthDocuments
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver) || component.text().includes(knowledgeTest), false);
    });
  
    it('is false when dob is day turning 18', function() {
      dob = {
        year: 1999,
        month: 12,
        day: 14
      };
      component = render(
        <YouthDocuments
          dateOfBirth={dob}
          now={mockNow}
          license={license}
        />
      )
      assert.equal(component.text().includes(newDriver) || component.text().includes(knowledgeTest), false);
    });
  });
});
