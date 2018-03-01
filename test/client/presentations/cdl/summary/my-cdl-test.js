'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import translations     from '../../../../../client/i18n';
import MyApp            from '../../../../../client/presentations/cdl/summary/cdl-app.jsx';

describe('CDL Summary My CDL Application section', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    props = {
      ui: {
        locale: 'en'
      },
      cdl: {
        cardAction: ''
      }
    };
  });

  it('does not render if cardAction is blank', function() {
    let component = render(
      <Wrapper>
        <MyApp { ...props } />
      </Wrapper>
    );
    assert.ok(!component.text().includes('I am'));
  });

  it('shows user getting a new CDL if cardAction equals new', function() {
    props.cdl.cardAction = 'new';
    let component = render(
      <Wrapper>
        <MyApp { ...props } />
      </Wrapper>
    );
    assert.ok(component.text().includes('I amApplying for the first time'));
  });

  it('shows user renewing a CDL if cardAction equals renew', function() {
    props.cdl.cardAction = 'renew';
    let component = render(
      <Wrapper>
        <MyApp { ...props } />
      </Wrapper>
    );
    assert.ok(component.text().includes('I amRenewing'));
  });

});