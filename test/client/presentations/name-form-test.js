'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import NameForm from '../../../client/presentations/name-form.jsx';

describe('NameForm', function() {
  let component, legalName, onSubmit, onChange, history;

  beforeEach(function() {
    onSubmit = sinon.spy();
    onChange = function () {}; // no-op
    legalName = {
      firstName: '',
      middleName: '',
      lastName: ''
    };
    history = [];
  });

  it('submit is disabled without a last name', function () {
    component = shallow(
      <NameForm
        legalName={legalName}
      />
    );

    assert(
      component.find('input[type="submit"]').is('[disabled]'),
      'input not disabled'
    );
  });

  it('submit is not disabled if it has a last name', function () {
    legalName.lastName = 'W';
    component = shallow(
      <NameForm
        legalName={legalName}
      />
    );

    assert(
      component.find('input[type="submit"]').not('[disabled]'),
      'input is still disabled'
    );
  });

  it('onSubmit(event) calls the original callback', function() {
    legalName.lastName = 'W';
    component = mount(
      <MemoryRouter>
        <NameForm
          onSubmit={ onSubmit }
          onChange={ onChange }
          legalName={legalName}
          history={history}
        />
      </MemoryRouter>
    );

    component.find('input[type="submit"]').simulate('submit');
    assert(onSubmit.called, 'onSubmit original not called');
  });

  it('onSubmit(event) pushes history to the right url', function() {
    legalName.lastName = 'W';
    component = mount(
      <MemoryRouter>
        <NameForm
          onSubmit={ onSubmit }
          onChange={ onChange }
          legalName={legalName}
          history={history}
        />
      </MemoryRouter>
    );

    component.find('input[type="submit"]').simulate('submit');
    assert.equal(history[0], '/services/about-me/date-of-birth');
  });
});
