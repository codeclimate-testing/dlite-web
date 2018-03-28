'use strict';

import assert                 from 'assert';
import React                  from 'react';
import { render }             from 'enzyme';
import { spy }                from 'sinon';
import wrapperGenerator       from '../support/wrapper';
import configure              from '../support/configure-enzyme';
import store                  from '../support/page-store';
import { Route, Redirect }    from 'react-router-dom';
import { PrivateRoute }       from '../../../client/containers/private-route.jsx';
import {
  buildAppName,
  buildLoggedIn
 } from '../../../client/helpers/data/cookies';


let TestComponent = (props) => {
  return (
    <div className='test'></div>
  )
};

describe('Private route', function() {
  const Wrapper = wrapperGenerator(store);

  it('returns the component if log in is not required', function() {
    buildLoggedIn();
    process.env.APP_ENV = 'production';
    let route = render(
      <Wrapper>
        <PrivateRoute pathURL = '/apply/some-url' component={<TestComponent/>} />
      </Wrapper>
    );
    assert.ok(route.find('.test'));
  });

  it('redirects to pathnameURL if log in is required', function() {
    document.cookie = 'isLoggedIn=false;path=/';
    buildAppName('cdl');
    process.env.APP_ENV = 'production';

    let route = render(
      <Wrapper>
        <PrivateRoute pathURL = '/apply/some-url' component={<TestComponent/>} />
      </Wrapper>
    );
    assert.ok(route.find('.id-me'));
  });
});