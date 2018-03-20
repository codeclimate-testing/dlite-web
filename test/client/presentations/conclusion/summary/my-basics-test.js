'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import data             from '../../../../../server/models/parsers/client-default-state.js';
import translations     from '../../../../../client/i18n';

import MyBasics         from '../../../../../client/presentations/conclusion/summary/my-basics.jsx';
import {
  Empty,
  LegalName,
  DateOfBirth,
  Address,
  TraitsHeightWeight,
  PhysicalTraits,
  SocialSecurity
} from '../../../../../client/presentations/conclusion/summary/my-basics/index';

const Wrapper = wrapperGenerator(store);
let locale = 'en';

describe('Summary My Basics section', function() {
  let props;
  beforeEach(function() {
    props = {
      application: Object.assign({}, data.IDDL.application),
      onSubmit: spy(),
      ui: { locale }
    };
  });

  describe('#My basics accordion', function() {
    it('shows an opened accordion with text "My basics"', function() {
      let component = render(
        <Wrapper>
          <MyBasics { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('My basics'));
    });
  });
});

describe('Summary My basics section components', function() {
  let props;
  beforeEach(function() {
    props = Object.assign({}, data.IDDL.application);
    props.locale = locale;
    props.editKey = '';
  });

  describe('#Empty', function() {
    it('returns null when no value', function() {
      let component = render(
        <Wrapper>
          <Empty { ...props } />
        </Wrapper>
      );

      assert.ok(component.text().includes('No information has been entered yet'));
    });
  });
  describe('#LegalName', function() {
    it('shows name when name entered', function() {
      props.legalName = {
        firstName: 'this',
        middleName: 'is',
        lastName: 'my',
        suffix: 'III'
      };
      props.editKey = 'legalName';
      let component = render(
        <Wrapper>
          <LegalName
            { ...props }
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Name'), true);
      assert.equal(component.text().includes('this is my III'), true);
    });
  });

  describe('#DateOfBirth', function() {
    it('shows date of birth fields', function(){
      props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      props.editKey = 'dateOfBirth';
      let component = render(
        <Wrapper>
          <DateOfBirth
            { ...props }
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Date of birth'), true);
      assert.equal(component.text().includes('11/11/1999'), true);
    });
  });
  describe('#Address', function() {
    it('shows address fields', function(){
      props.basics.address.homeAddressSameAsMailing = 'No';
      props.basics.address.home = {
        street_1: '111 Main Street',
        street_2: '',
        city: 'Sacramento',
        state: 'CA',
        zip: '95814'
      };

      props.basics.address.mailing = {
        street_1: '222 High Street',
        street_2: '',
        city: 'Beverly Hills',
        state: 'CA',
        zip: '90210'
      };

      props.editKey = 'addresses';

      let component = render(
        <Wrapper>
          <Address
            { ...props }
            address = {props.basics.address}
          />
        </Wrapper>
      )

      assert.equal(component.text().includes(`${translations[locale].summaryPage.myBasics.homeAddress}`), true);
      assert.equal(component.text().includes('111 Main Street'), true);
      assert.equal(component.text().includes('Sacramento, CA 95814'), true);
      assert.equal(component.text().includes(`${translations[locale].summaryPage.myBasics.mailingAddress}`), true);
      assert.equal(component.text().includes('222 High Street'), true);
      assert.equal(component.text().includes('Beverly Hills, CA 90210'), true);
    });
  });
  describe('#TraitsHeightWeight', function() {
    it('shows height and weight traits', function(){
      props.traitsHeightWeight = {
        weight: '200',
        heightFeet: '6',
        heightInches: '3'
      };

      props.editKey = 'heightWeight';

      let component = render(
        <Wrapper>
          <TraitsHeightWeight
            { ...props }
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Height'), true);
      assert.equal(component.text().includes('6 feet 3 inches'), true);
      assert.equal(component.text().includes('Weight'), true);
      assert.equal(component.text().includes('200 pounds'), true);
    });
  });
  describe('#PhysicalTraits', function() {
    it('shows physical traits', function(){
      props.physicalTraits = {
        sex: 'Female',
        eyeColor: 'Green',
        hairColor: 'Black'
      };

      props.editKey = 'sexEyeHair';

      let component = render(
        <Wrapper>
          <PhysicalTraits
            { ...props }
          />
        </Wrapper>
      );

      assert.equal(component.text().includes('Sex'), true);
      assert.equal(component.text().includes('Female'), true);
      assert.equal(component.text().includes('Eye color'), true);
      assert.equal(component.text().includes('Green'), true);
      assert.equal(component.text().includes('Hair color'), true);
      assert.equal(component.text().includes('Black'), true);
    });
  });
  describe('#SocialSecurity', function() {
    it('shows social security number when user has entered data', function(){
      let socialSecurity = {
        hasSocialSecurity: 'Yes',
        part1: '234',
        part2: '56',
        part3: '1293'
      };

      props.editKey = 'socialSecurity';

      let component = render(
        <Wrapper>
          <SocialSecurity
            { ...props }
            socialSecurity={socialSecurity}
          />
        </Wrapper>
      )

      assert.equal(component.text().includes('Social Security number'), true);
      assert.equal(component.text().includes('xxx-xx-1293'), true);
    });
  });
});