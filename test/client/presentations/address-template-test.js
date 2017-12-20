'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import sinon from 'sinon';

import AddressForm from '../../../client/presentations/address-template.jsx';

describe('AddressTemplateForm', function() {
  it('renders form controls with the right ids', function() {
    let state = {
      street_1: '123 main street',
      street_2: 'Unit No. 45',
      city: 'Cray',
      state: 'CA',
      zip: 93366
    };

    let component = render(
      <AddressForm
        type='home'
        address={ state }
        onChange={ sinon.spy() }
        onSubmit={ sinon.spy() }
      />
    );

    assert.ok(component.find('#homeStreet_1').length, 'Street address input not found');
    assert.ok(component.find('#homeStreet_2').length, 'Unit or apartment input not found');
    assert.ok(component.find('#homeCity').length,   'City input not found');
    assert.ok(component.find('#homeState').length,  'State select not found');
    assert.ok(component.find('#homeZip').length,    'State select not found');
  });
});
