'use strict';

import assert               from 'assert';
import React                from 'react';
import configure            from '../../support/configure-enzyme';
import { render }           from 'enzyme';
import { spy }              from 'sinon';
import store                from '../../support/page-store';
import wrapperGenerator     from '../../support/wrapper';
import OpenApplications     from '../../../../client/presentations/intro/open-applications.jsx';


describe('Open Applications page', function() {
  const Wrapper = wrapperGenerator(store);
  let apps, component, props;
  beforeEach(function() {
    props = {
      apiStatus: '',
      userData: {
        apps: [],
        userID: '',
        appsLength: ''
      }
    };
  });

  it('shows error message if apiStatus is error', function() {
    props.apiStatus = 'error';
    let component = render(
      <Wrapper>
        <OpenApplications {...props} />
      </Wrapper>
    );
    assert.ok(component.find('.error').length);
  });

});


