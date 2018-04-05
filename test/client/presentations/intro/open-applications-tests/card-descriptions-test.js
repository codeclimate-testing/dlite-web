'use strict';

import assert               from 'assert';
import React                from 'react';
import configure            from '../../../support/configure-enzyme';
import { render }           from 'enzyme';
import { spy }              from 'sinon';
import store                from '../../../support/page-store';
import wrapperGenerator     from '../../../support/wrapper';
import { CardDescription }  from '../../../../../client/presentations/intro/open-applications/card-description.jsx';


describe('Open Applications card descriptions', function() {
  const Wrapper = wrapperGenerator(store);
  let cardType;
  beforeEach(function() {
    cardType = [];
  });

  it('getting ID', function() {
    cardType = ['ID'];
    let component = render(
      <Wrapper>
        <CardDescription cardType={cardType} />
      </Wrapper>
    );
    assert.ok(component.text().includes('Applying for an ID card'));
  });

  it('getting DL', function() {
    cardType = ['DL'];
    let component = render(
      <Wrapper>
        <CardDescription cardType={cardType} />
      </Wrapper>
    );
    assert.ok(component.text().includes('Applying for a driver license'));
  });

  it('getting CDL', function() {
    cardType = ['CDL'];
    let component = render(
      <Wrapper>
        <CardDescription cardType={cardType} />
      </Wrapper>
    );
    assert.ok(component.text().includes('Applying for a commercial driver license'));
  });

  it('getting both DL and ID', function() {
    cardType = ['DL', 'ID'];
    let component = render(
      <Wrapper>
        <CardDescription cardType={cardType} />
      </Wrapper>
    );
    assert.ok(component.text().includes('Applying for a driver license and an ID card'));
  });
});


