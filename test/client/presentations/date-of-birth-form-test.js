'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import DateOfBirthForm from '../../../client/presentations/date-of-birth-form.jsx';

describe('DateOfBirthForm', function() {
  let component, dateOfBirth, onSubmit, onChange, history;

  beforeEach(function() {
    onSubmit = sinon.spy();
    onChange = function () {}; // no-op

    dateOfBirth = {
      month: '',
      day: '',
      year: ''
    };

    history = [];
  });

  describe('when submit enabled/disabled', function() {
    it('submit is disabled without a month', function () {
      dateOfBirth.day = 7;
      dateOfBirth.year = 1967;

      component = shallow(
        <DateOfBirthForm
          dateOfBirth={dateOfBirth}
        />
      );

      assert(
        component.find('input[type="submit"]').is('[disabled]'),
        'input not disabled'
      );
    });

    it('submit is disabled without a day', function () {
      dateOfBirth.month = 9;
      dateOfBirth.year = 1967;

      component = shallow(
        <DateOfBirthForm
          dateOfBirth={dateOfBirth}
        />
      );

      assert(
        component.find('input[type="submit"]').is('[disabled]'),
        'input not disabled'
      );
    });

    it('submit is disabled without a year', function () {
      dateOfBirth.day = 7;
      dateOfBirth.month = 9;

      component = shallow(
        <DateOfBirthForm
          dateOfBirth={dateOfBirth}
        />
      );

      assert(
        component.find('input[type="submit"]').is('[disabled]'),
        'input not disabled'
      );
    });

    it('submit is enabled with all the fields present', function() {
      dateOfBirth.day = 7;
      dateOfBirth.month = 9;
      dateOfBirth.year = 1967;

      component = shallow(
        <DateOfBirthForm
          dateOfBirth={dateOfBirth}
        />
      );

      assert(
        component.find('input[type="submit"]').not('[disabled]'),
        'input is disabled'
      );
    });
  });

  describe('submit behavior', function() {
    it('calls the original callback', function() {
      dateOfBirth.day = 7;
      dateOfBirth.month = 9;
      dateOfBirth.year = 1967;

      component = mount(
        <MemoryRouter>
          <DateOfBirthForm
            onSubmit={ onSubmit }
            onChange={ onChange }
            dateOfBirth={dateOfBirth}
            history={history}
          />
        </MemoryRouter>
      );

      component.find('input[type="submit"]').simulate('submit');
      assert(onSubmit.called, 'onSubmit original not called');
    });

    it('pushes history to the right url', function() {
      dateOfBirth.day = 7;
      dateOfBirth.month = 9;
      dateOfBirth.year = 1967;

      component = mount(
        <MemoryRouter>
          <DateOfBirthForm
            onSubmit={ onSubmit }
            onChange={ onChange }
            dateOfBirth={dateOfBirth}
            history={history}
          />
        </MemoryRouter>
      );

      component.find('input[type="submit"]').simulate('submit');
      assert.equal(history[0], '/services/about-me/addresses');
    });
  });
});
