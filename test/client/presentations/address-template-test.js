'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import { render } from 'enzyme';
import sinon from 'sinon';

import AddressForm from '../../../client/presentations/address-template-form.jsx';

describe('AddressTemplateForm', function() {
  it('renders form controls with the right ids', function() {
    let state = {
      street: '123 main street',
      city: 'Cray',
      state: 'CA',
      zip: 93366
    };

    let component = render(
      <AddressForm
        type='mailing'
        address={ state }
        onChange={ sinon.spy() }
        onSubmit={ sinon.spy() }
      />
    );

    assert.ok(component.find('#mailingStreet').length, 'Street address input not found');
    assert.ok(component.find('#mailingCity').length,   'City input not found');
    assert.ok(component.find('#mailingState').length,  'State select not found');
    assert.ok(component.find('#mailingZip').length,    'State select not found');
  });
});
