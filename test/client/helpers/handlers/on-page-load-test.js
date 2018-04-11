'use strict';

import assert from 'assert';
import sinon from 'sinon';

import onPageLoad from '../../../../client/helpers/handlers/on-page-load';

describe('onPageLoad', function() {
  let value, section, pathname, savedPath, dispatch, onLoad;

  beforeEach(function() {
    dispatch = sinon.spy();
    value = 'intro';
    section = {
      key: ''
    };
    pathname = '/apply/cdl/my-basics/date-of-birth';
    savedPath='';
    onLoad = onPageLoad(dispatch);
  });

  it('does nothing if savedPath matches the pathname in state', function() {
    savedPath = pathname;
    onLoad(value, section, pathname, savedPath);
    assert(dispatch.notCalled, 'dispatch called');
  });

  it('dispatches changePathname', function() {
    onLoad(value, section, pathname, savedPath);
    assert(
      dispatch.calledWith({
        type: 'CHANGE_PATHNAME',
        payload: {value: pathname}
      }),
      'dispatch not called'
    );
  });

  it('doesnt dispatch changeSection if value matches section key', function() {
    section.key = value;
    onLoad(value, section, pathname, savedPath);
    assert(!dispatch.calledWith({
      type: 'CHANGE_SECTION',
      payload: { value: value}
    }), 'dispatch was called');
  });

  it('dispatches changeSection if value differs from section key', function() {
    onLoad(value, section, pathname, savedPath);
    assert(dispatch.calledWith({
      type: 'CHANGE_SECTION',
      payload: { value: value}
    }), 'dispatch was not called');
  });
});

