'use strict';

import assert from 'assert';
import sinon from 'sinon';

import dropDownHandlers from '../../../../client/helpers/handlers/select-dropdown';

describe('select dropdown handlers', function() {
  let event, target, props, dispatch, Presentation, handler;

  beforeEach(function() {
    dispatch = sinon.spy();

    Presentation = {
      className: 'select-dropdown',
      openClass: 'open'
    };

    props = {
      values: ['values'],
      name: 'suffix',
      hover: 'Jr.',
      changeAction: sinon.spy()
    };

    target = {
      className: 'select-dropdown',
      id: 'my-id'
    };
  });

  // TODO: find a better location for this functionality, should be used on
  // Accordion and other click based stuff
  describe('findTarget', function() {
    beforeEach(function() {
      handler = dropDownHandlers(dispatch, props, Presentation).findTarget;
    });

    it('finds the passed in dom node when it has the right presentation class', function() {
      assert.equal(handler(target, 'select-dropdown'), target);
    });

    it('looks up the parent dom chain for a dom node with the right presentation class', function() {
      target = {
        className: 'child-node',
        parentNode: {
          className: 'still-not-it',
          parentNode: {
            className: 'select-dropdown'
          }
        }
      };
      assert.equal(handler(target, 'select-dropdown'), target.parentNode.parentNode);
    });
  });

  describe('onArrowUp', function() {
    beforeEach(function() {
      event = {
        preventDefault: sinon.spy(),
        target: target
      };

      handler = dropDownHandlers(dispatch, props, Presentation).onArrowUp;
    });

    it('prevents default on the event', function() {
      handler(event);
      assert(event.preventDefault.called);
    });

    it('dispatches an action to hover on the next element above in the list', function() {
      handler(event);
      assert.deepEqual(dispatch.getCall(0).args[0], {
        type: 'HOVER_UP',
        payload: {
          value: [
            'values'
          ]
        }
      });
    });

    it('if not already open, it dispatches an action to open the dropdown', function() {
      handler(event);
      assert.deepEqual(dispatch.getCall(1).args[0], {
        type: 'FOCUS_PAGE_ELEMENT',
        payload: {
          value: 'my-id'
        }
      });
    });

    it('if already open, it does not dispatch the action to open the dropdown', function() {
      event.target.className += ' open';

      handler(event);
      assert.equal(dispatch.callCount, 1); // for the hover of the element
    });
  });

  describe('onArrowDown', function() {
    beforeEach(function() {
      event = {
        preventDefault: sinon.spy(),
        target: target
      };

      handler = dropDownHandlers(dispatch, props, Presentation).onArrowDown;
    });

    it('prevents default on the event', function() {
      handler(event);
      assert(event.preventDefault.called);
    });

    it('dispatches an action to hover on the next element below in the list', function() {
      handler(event);
      assert.deepEqual(dispatch.getCall(0).args[0], {
        type: 'HOVER_DOWN',
        payload: {
          value: [
            'values'
          ]
        }
      });
    });

    it('if not already open, it dispatches an action to open the dropdown', function() {
      handler(event);
      assert.deepEqual(dispatch.getCall(1).args[0], {
        type: 'FOCUS_PAGE_ELEMENT',
        payload: {
          value: 'my-id'
        }
      });
    });

    it('if already open, it does not dispatch the action to open the dropdown', function() {
      event.target.className += ' open';

      handler(event);
      assert.equal(dispatch.callCount, 1); // for the hover of the element
    });
  });

  describe('onEnter', function() {
    beforeEach(function() {
      event = {
        preventDefault: sinon.spy(),
        target: target
      };

      handler = dropDownHandlers(dispatch, props, Presentation).onEnter;
    });

    it('prevents default on the event', function() {
      handler(event);
      assert(event.preventDefault.called);
    });

    it('dispatches an action passed through props in order to store application state', function() {
      handler(event);
      assert.deepEqual(props.changeAction.getCall(0).args[0], 'suffix');
      assert.deepEqual(props.changeAction.getCall(0).args[1], 'Jr.');
    });

    it('when open, dispatches an action that closes the dropdown and clears the hover', function() {
      event.target.className += ' open';
      handler(event);

      assert.deepEqual(dispatch.getCall(1).args[0], {
        type: 'BLUR_PAGE_ELEMENT',
        payload: {
          value: 'my-id'
        }
      });

      assert.deepEqual(dispatch.getCall(2).args[0].type, 'CLEAR_HOVER');
    });

    it('when closed, does not dispatch anything', function() {
      handler(event);
      assert.equal(dispatch.callCount, 1); // for setting application state
    });
  });

  describe('onEscape', function() {
    beforeEach(function() {
      event = {
        preventDefault: sinon.spy(),
        target: target
      };

      handler = dropDownHandlers(dispatch, props, Presentation).onEscape;
    });

    it('prevents default on the event', function() {
      handler(event);
      assert(event.preventDefault.called);
    });

    it('when open, dispatches an action that closes the dropdown and clears the hover', function() {
      event.target.className += ' open';
      handler(event);

      assert.deepEqual(dispatch.getCall(0).args[0], {
        type: 'BLUR_PAGE_ELEMENT',
        payload: {
          value: 'my-id'
        }
      });

      assert.deepEqual(dispatch.getCall(1).args[0].type, 'CLEAR_HOVER');
    });

    it('when closed, does not dispatch anything', function() {
      handler(event);
      assert.equal(dispatch.callCount, 0);
    });
  });

  describe('toggleOpenState', function() {
    beforeEach(function() {
      event = {
        preventDefault: sinon.spy(),
        target: target
      };

      handler = dropDownHandlers(dispatch, props, Presentation).toggleOpenState;
    });

    it('when the dropdown is open, it dispatches actions to close and clear hover', function() {
      event.target.className += ' open';

      handler(event);

      assert.deepEqual(dispatch.getCall(0).args[0], {
        type: 'BLUR_PAGE_ELEMENT',
        payload: {
          value: 'my-id'
        }
      });

      assert.deepEqual(dispatch.getCall(1).args[0].type, 'CLEAR_HOVER');
    });

    it('when the dropdown is closed, it dispatches an action to open', function() {
      handler(event);

      assert.deepEqual(dispatch.getCall(0).args[0], {
        type: 'FOCUS_PAGE_ELEMENT',
        payload: {
          value: 'my-id'
        }
      });
    });
  });
});

