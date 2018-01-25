'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import sinon      from 'sinon';

import AddressForm from '../../../client/presentations/address-template.jsx';

describe('AddressTemplateForm', function() {
  let stateData = {
    homeAddressSameAsMailing: '',
    home: {
      street_1: '123 main street',
      street_2: 'Unit No. 45',
      city: 'Cray',
      state: 'CA',
      zip: 93366,
    },
    mailing: {
      street_1: '',
      street_2: '',
      city: '',
      state: 'CA',
      zip: '',
    }
  };
  let validations = {
    homeStreet_1:               sinon.spy(),
    mailingStreet_1:            sinon.spy(),
    homeStreet_2:               sinon.spy(),
    mailingStreet_2:            sinon.spy(),
    homeCity:                   sinon.spy(),
    mailingCity:                sinon.spy(),
    homeZip:                    sinon.spy(),
    mailingZip:                 sinon.spy(),
    homeAddressSameAsMailing:   sinon.spy(),
    all:                        sinon.spy(),
    isValid:                    () => { return true; }
  };

  let component;

  beforeEach(function() {
    component = render(
      <AddressForm
        type        = 'home'
        address     = { stateData }
        onChange    = { sinon.spy() }
        onSubmit    = { sinon.spy() }
        validations = { validations}
      />
    );
  });

  it('street address 1 input constructed correctly', function() {
    assert.ok(
      component.find('#homeStreet_1').length,
      'Street address input not found'
    );

    assert.ok(
      component.find('input[name=homeStreet_1]').length,
      'Street address input has incorrect name'
    );
  });

  it('street address 2 input constructed correctly', function() {
    assert.ok(
      component.find('#homeStreet_2').length,
      'Unit or apartment input not found'
    );

    assert.ok(
      component.find('input[name=homeStreet_2]').length,
      'Unit or apartment input has incorrect name'
    );
  });

  it('constructs the city input correctly', function () {
    assert.ok(
      component.find('#homeCity').length,
      'City input not found'
    );

    assert.ok(
      component.find('input[name=homeCity]').length,
      'City input has incorrect name'
    );
  });

  it('constructs the state selector correctly', function() {
    assert.ok(
      component.find('.dropdown#homeState').length,
      'State select not found'
    );

    assert.ok(
      component.find('.dropdown#homeState').length,
      'State input has incorrect name'
    );
  });

  it('constructs the zip input correctly', function () {
    assert.ok(
      component.find('#homeZip').length,
      'Zip input not found'
    );

    assert.ok(
      component.find('input[name=homeZip]').length,
      'Zip input has incorrect name'
    );
  });
});
