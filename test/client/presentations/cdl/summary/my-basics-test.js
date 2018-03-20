'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import translations     from '../../../../../client/i18n';
import MyBasics         from '../../../../../client/presentations/cdl/summary/my-basics.jsx';

describe('CDL Summary My Basics section', function() {
  const Wrapper = wrapperGenerator(store);
  let props, component;

  beforeEach(function() {
    props = {
      ui: {
        locale: 'en'
      },
      cdl: {
        basics: {
          legalName: {
            firstName: 'Steve',
            middleName: '',
            lastName: 'Pastrami',
            suffix: ''
          },
          dateOfBirth: {
            month: '01',
            day: '29',
            year: '1957'
          },
          physicalTraits: {
            sex: 'Female',
            eyeColor: 'Black',
            hairColor: 'Gray'
          },
          traitsHeightWeight: {
            weight: '156',
            heightFeet: '5',
            heightInches: '4'
          },
          socialSecurity: {
            hasSocialSecurity: 'Yes',
            part1: '123',
            part2: '45',
            part3: '6789'
          },
          address: {
            isResident: 'Yes',
            homeAddressSameAsMailing: 'Yes',
            home: {
              street_1: '9900142',
              street_2: 'Apt 30-Q',
              city: 'Rockville',
              state: 'CA',
              zip: '010101',
            },
            mailing: {
              street_1: '9900142',
              street_2: 'Apt 30-Q',
              city: 'Rockville',
              state: 'CA',
              zip: '010101',
            }
          }
        }
      }
    };
    component = render(
      <Wrapper>
        <MyBasics { ...props } />
      </Wrapper>
    );
  });

  it('shows the name', function() {
    assert.equal(component.text().includes('NameSteve  Pastrami'), true);
  });

  it('shows the dob', function() {
    assert.equal(component.text().includes('Date of birth'), true);
    assert.equal(component.text().includes('01/29/1957'), true);
  });

  it('shows the physical traits', function() {
    assert.equal(component.text().includes('Sex'), true);
    assert.equal(component.text().includes('Female'), true);
    assert.equal(component.text().includes('Eye color'), true);
    assert.equal(component.text().includes('Black'), true);
    assert.equal(component.text().includes('Hair color'), true);
    assert.equal(component.text().includes('Gray'), true);
  });

  it('shows the physical traits', function() {
    assert.equal(component.text().includes('Height'), true);
    assert.equal(component.text().includes('5 feet 4 inches'), true);
    assert.equal(component.text().includes('Weight'), true);
    assert.equal(component.text().includes('156 pounds'), true);
  });

  it('shows the home address', function() {
    assert.equal(component.text().includes(`${translations[props.ui.locale].summaryPage.myBasics.homeAddress}`), true);
    assert.equal(component.text().includes('9900142'), true);
    assert.equal(component.text().includes('Apt 30-Q'), true);
    assert.equal(component.text().includes(`${translations[props.ui.locale].summaryPage.myBasics.mailingAddress}`), true);
    assert.equal(component.text().includes('Rockville, CA 010101'), true);
  });

  it('shows the social security', function() {
    assert.equal(component.text().includes('Social Security number'), true);
    assert.equal(component.text().includes('xxx-xx-6789'), true);
  });
});