'use strict';

import assert           from 'assert';
import React            from 'react';
import RealID           from '../../../../client/presentations/conclusion/summary/real-id.jsx';
import { render }       from 'enzyme';
import wrapperGenerator from '../../support/wrapper';
import store            from '../../support/page-store';


describe('RealID sections on summary pages', function() {
  const Wrapper = wrapperGenerator(store);
  let props;
  let locale = 'en';
  beforeEach(function() {
    props = {
      name: 'realID',
      summary: 'summary',
      realID: '',
      showIf: true,
      title: 'Real-ID Compliant',
      editKey: 'realID',
      locale
    };
  });

  it('shows Yes if user is getting real id', function() {
    props.realID = 'Yes';
    let component = render(
      <Wrapper>
        <RealID {...props} />
      </Wrapper>
    );

    assert.ok(component.text().includes('Real-ID CompliantYes'));
  });

  it('shows No if user is not getting real id', function() {
    props.realID = 'No';
    let component = render(
      <Wrapper>
        <RealID {...props} />
      </Wrapper>
    );
    assert.ok(component.text().includes('Real-ID CompliantNo'));
  });

});