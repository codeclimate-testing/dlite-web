'use strict';

import assert from 'assert';

import React from 'react';
import { render } from 'enzyme';
import sinon from 'sinon';
import {MemoryRouter} from 'react-router-dom';

import LicenseAndIdHistory from '../../../client/presentations/apply/license-and-id-history-form.jsx';

describe('LicenseAndIdHistory', function() {
  let component, state;

  it('renders general license and id history page when applying for DL', function() {
    state = {
      'cardType': {
        'ID': false,
        'DL': true
      }
    };

    component = render(
      <MemoryRouter>
      <LicenseAndIdHistory
      onChange      ={sinon.spy()}
      cardType      ={state.cardType}
      />
      </MemoryRouter>
    );

    assert.ok(component.find('.applying-for-dl').length, 'general license and id history page not found');
  });

  it('renders general license and id history page when applying for both ID and DL', function() {
    state = {
      'cardType': {
        'ID': true,
        'DL': true
      }
    };

    component = render(
      <MemoryRouter>
      <LicenseAndIdHistory
      onChange      ={sinon.spy()}
      cardType      ={state.cardType}
      />
      </MemoryRouter>
    );

    assert.ok(component.find('.applying-for-dl').length, 'general license and id history page not found');
  });

  it('renders CA specific license and id history page when applying for only ID', function() {
    state = {
      'cardType': {
        'ID': true,
        'DL': false
      }
    };

    component = render(
      <MemoryRouter>
      <LicenseAndIdHistory
      onChange      ={sinon.spy()}
      cardType      ={state.cardType}
      />
      </MemoryRouter>
    );

    assert.ok(component.find('.applying-for-only-id').length, 'ca id header not found');
  });
});
