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
          residency: {
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
    assert.equal(component.text().includes('Date Of Birth'), true);
    assert.equal(component.text().includes('01/29/1957'), true);
  });

  it('shows the home address', function() {
    assert.equal(component.text().includes(`${translations[props.ui.locale].summaryPage.myBasics.homeAddress}`), true);
    assert.equal(component.text().includes('9900142'), true);
    assert.equal(component.text().includes('Apt 30-Q'), true);
    assert.equal(component.text().includes(`${translations[props.ui.locale].summaryPage.myBasics.mailingAddress}`), true);
    assert.equal(component.text().includes('Rockville, CA 010101'), true);
  });

});