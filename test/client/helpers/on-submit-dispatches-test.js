'use strict';

import assert                   from 'assert';
import { spy, stub }            from 'sinon';
import * as onSubmitDispatches  from '../../../client/helpers/on-submit-dispatches';
import { createMemoryHistory }  from 'history';

describe('on submit dispatches', function() {
  let event, stateProps, dispatchProps, ownProps;

  beforeEach(function() {
    event = { preventDefault: spy() };
    dispatchProps = {
      dispatch: spy()
    };

    ownProps = {
      location: {},
      history: createMemoryHistory('/')
    };

    stateProps = {
      language: '',
      citizenStatus: '',
      server: {
        apiState: ''
      }
    };
  });

  describe('#updateCitizenship', function() {
    it('if citizenStatus is blank the update citizenship status action will be dispatched', function() {
      let onSubmit = onSubmitDispatches.updateCitizenship(stateProps, dispatchProps.dispatch);
      onSubmit(event);
      assert.ok(
        dispatchProps.dispatch.calledWith({
          type: 'UPDATE_CITIZEN_STATUS',
          payload: {
            name: 'citizenStatus',
            value: 'decline'
          }
        }),
        'dispatch not called'
      );
    });

    it('if citizenStatus is not blank the action will not be dispatched', function() {
      stateProps.citizenStatus = 'Yes';
      let onSubmit = onSubmitDispatches.updateCitizenship(stateProps, dispatchProps.dispatch);
      onSubmit(event);
      assert(
        !dispatchProps.dispatch.calledWith({
          type: 'UPDATE_CITIZENSHIP',
          payload: {
            name: 'citizenStatus',
            value: 'decline'
          }
        }),
        'dispatch not called'
      );
    });
  });

  describe('#applicationLanguageSubmit', function() {
    it('prevent browser default submit', function() {
      let onSubmit = onSubmitDispatches.applicationLanguageSubmit(
        stateProps,
        dispatchProps.dispatch,
        ownProps
      );
      onSubmit(event);
      assert(event.preventDefault.called, 'browser submit triggered');
    });

    it('if language is blank the updateLanguage action will be dispatched', function() {
      let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert(
        dispatchProps.dispatch.calledWith({
          type: 'UPDATE_LANGUAGE',
          payload: {
            name: 'language',
            value: 'en'
          }
        }),
        'dispatch not called'
      );
    });

    it('if language has been chosen the updateLanguage action will not be dispatched', function() {
      stateProps.language = 'en';
      let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert(!dispatchProps.dispatch.called, 'dispatch should not have been called, but was');
    });

    it('if language is selected as english, it redirects to the next page', function() {
      stateProps.language = 'en';
      let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert.equal(ownProps.history.entries[1].pathname, '/apply/choose-application');
    });

    it('if language is not selected, it redirects to the next page', function() {
      stateProps.language = '';
      let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert.equal(ownProps.history.entries[1].pathname, '/apply/choose-application');
    });

    it('if a non-english language is selected, it redirects to the next page', function() {
      stateProps.language = 'es';
      let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert.equal(ownProps.history.entries[1].pathname, '/apply/choose-application');
    });

    it('if a non-english language is selected, dispatches a call to get translations', function() {
      stateProps.language = 'es';
      let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert(
        dispatchProps.dispatch.calledWith({
          type: 'UPDATE_API_STATUS',
          payload: {
            value: 'loading'
          }
        }),
        'dispatch not called to get translations'
      );
    });
  });
});
