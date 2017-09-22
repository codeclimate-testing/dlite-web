'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import { render } from 'enzyme';
import sinon from 'sinon';

import AddressForm from '../../../client/presentations/address-template.jsx';

describe('AddressTemplateForm', function() {
  it('renders form controls with the right ids', function() {
    let state = {
      street_1: '123 main street',
      stree_2: 'Unit No. 45',
      city: 'Cray',
      state: 'CA',
      zip: 93366
    };

    let component = render(
      <AddressForm
        type='residential'
        address={ state }
        onChange={ sinon.spy() }
        onSubmit={ sinon.spy() }
      />
    );

    assert.ok(component.find('#residentialStreet_1').length, 'Street address input not found');
    assert.ok(component.find('#residentialStreet_2').length, 'Unit or apartment input not found');
    assert.ok(component.find('#residentialCity').length,   'City input not found');
    assert.ok(component.find('#residentialState').length,  'State select not found');
    assert.ok(component.find('#residentialZip').length,    'State select not found');
  });
});
