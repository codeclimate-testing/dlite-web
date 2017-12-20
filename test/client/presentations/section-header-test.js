'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import { render } from 'enzyme';

import SectionHeader from '../../../client/presentations/section-header.jsx';

describe('SectionHeader', function() {
  let component;

  it('does not render if not passed a name', function() {
    component = render(
      <SectionHeader number='0'/>
    );

    assert.equal(
      component.find('h3').length,
      0,
      'component rendered'
    );
  });

  it('does not render the number and arrows if no number is presented', function() {
    component = render(
      <SectionHeader name='Get started'/>
    );

    assert.equal(
      component.find('h3').length,
      1,
      'header not rendered'
    );

    assert.equal(
      component.text(),
      'Get started',
      'rendering arrow character'
    );
  });

  it('includes the number and name if both are provided', function() {
    component = render(
      <SectionHeader name='My basics' number='1'/>
    );

    assert.equal(
      component.find('h3').length,
      1,
      'header not rendered'
    );

    console.log(component.text());

    assert.equal(
      component.text().includes('1'),
      true,
      'number not rendered'
    );

    assert.equal(
      component.text().includes('My basics'),
      true,
      'name not rendered'
    );
  });
});

