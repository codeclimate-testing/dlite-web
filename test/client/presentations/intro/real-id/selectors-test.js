'use strict';

import assert           from 'assert';
import 'jsdom-global/register';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import React            from 'react';
import sinon            from 'sinon';

import { createMockStore } from 'redux-test-utils';
import { Provider }     from "react-redux";
import { MemoryRouter } from 'react-router-dom'

import RealIdSelectors  from '../../../../../client/presentations/intro/real-id/selectors.jsx';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';

describe('RealIdSelectors', function() {
  let props, Wrapper;

  beforeEach(function() {
    let cardType = {
      new: ['ID'],
      renew: ''
    }

    let realID = {
      realIdDesignation: '',
      getRealID: ''
    };

    let accordions = {};

    let onChange = sinon.spy();

    props = {
      cardType,
      realID,
      accordions,
      onChange
    }

    Wrapper = wrapperGenerator(store);
  });

  it('should have a header indicating your particular card type', function() {
    let component = render(
      <Wrapper>
        <RealIdSelectors {...props}/>
      </Wrapper>
    );

    assert.ok(
      component.text().includes('Do you plan on using your ID to fly?'),
      'Header does not include ID type'
    );

    props.cardType.new = ['DL'];

    component = render(
      <Wrapper>
        <RealIdSelectors {...props}/>
      </Wrapper>
    );

    assert.ok(
      component.text().includes('Do you plan on using your Driver License to fly?'),
      'Header does not include DL type'
    );
  });

  it('should have a header indicating you are applying for both cards is applicable', function() {
    props.cardType.new = ['DL', 'ID'];

    let component = render(
      <Wrapper>
        <RealIdSelectors {...props}/>
      </Wrapper>
    );

    assert.ok(
      component.text().includes('Do you plan on using one of your cards to fly?'),
      'Header does not for multicard'
    );
  });
});
