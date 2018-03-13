'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import store                    from '../../support/page-store';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import DateOfBirthPage          from '../../../../client/presentations/get-started/date-of-birth-page.jsx';

describe('DateOfBirthPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let dateOfBirth = {
        year: '',
        month: '',
        day: ''
      };

      let onChange = spy();

      let validations = {
        month: spy(),
        day: spy(),
        year: spy(),
        all: spy(),
        isValid: () => { return true; }
      };
      let locale = 'en';
      props = {
        dateOfBirth,
        onChange,
        validations,
        locale
      }
    });

    it('shows form for date of birth', function() {
      let component = render(
        <Wrapper>
          <DateOfBirthPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('input#month').length, 'month input missing');
      assert.ok(component.find('input#day').length, 'day input missing');
      assert.ok(component.find('input#year').length, 'year input missing');
    });

    it('does not show under 21 message if props do not include chooseApp property', function() {
      let component = render(
        <Wrapper>
          <DateOfBirthPage {...props} />
        </Wrapper>
      );
      assert.equal(component.find('.cdl-under-21').length, 0);
    });

    it('shows the under 21 message when user is on cdl application and is under 21', function() {
      props.dateOfBirth = {
        day: '4',
        month: '04',
        year: (new Date().getFullYear() - 18).toString()
      };
      props.chooseApp = 'cdl';
      let component = render(
        <Wrapper>
          <DateOfBirthPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.cdl-under-21').length);
    });
  });
});

