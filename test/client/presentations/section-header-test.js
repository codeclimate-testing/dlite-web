'use strict';

import assert from 'assert';

import React from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';

import SectionHeader from '../../../client/presentations/section-header.jsx';

describe('SectionHeader', function() {
  let component;

  it('does not render if not passed a name', function() {
    component = render(
      <SectionHeader />
    );

    assert.equal(
      component.text(),
      '',
      'component rendered'
    );
  });

  it('render when name is present', function() {
    component = render(
      <SectionHeader name='Get started'/>
    );

    assert.equal(
      component.text(),
      'Get started'
    );
  });
});

