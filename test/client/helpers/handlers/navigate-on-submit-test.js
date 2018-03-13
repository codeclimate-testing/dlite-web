'use strict';

import assert from 'assert';
import sinon from 'sinon';

import navigateOnSubmit from '../../../../client/helpers/handlers/navigate-on-submit';

describe('navigateOnSubmit', function() {
  let props;

  describe('when id-and-license application', function() {
    beforeEach(function() {
      props = {
        onSubmit: sinon.spy(),
        history: [],
        location: {
          pathname: 'apply/id-and-license/page'
        }
      };
    });

    it('calls the prop onSubmit function', function() {
      navigateOnSubmit('/foo/bar', props)();
      assert(props.onSubmit.called, 'onSubmit not called');
    });

    it('pushes an alice url to history', function() {
      navigateOnSubmit('/foo/bar', props)();
      assert.equal(props.history[0], '/apply/id-and-license/foo/bar');
    });
  });

  describe('when cdl application', function() {
    beforeEach(function() {
      props = {
        onSubmit: sinon.spy(),
        history: [],
        location: {
          pathname: 'apply/cdl/page'
        }
      };
    });

    it('calls the prop onSubmit function', function() {
      navigateOnSubmit('/foo/bar', props)();
      assert(props.onSubmit.called, 'onSubmit not called');
    });

    it('pushes an alice url to history', function() {
      navigateOnSubmit('/foo/bar', props)();
      assert.equal(props.history[0], '/apply/cdl/foo/bar');
    });
  })
});
