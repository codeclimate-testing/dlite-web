'use strict';

import assert                   from 'assert';
import { spy, stub }            from 'sinon';
import * as onSubmitDispatches  from '../../../client/helpers/on-submit-dispatches';
import { createMemoryHistory }  from 'history';

describe('on submit dispatches', function() {
  let event, stateProps, dispatchProps, ownProps, saveLanguageCookie, getTranslation;

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

    saveLanguageCookie = spy();
    getTranslation = spy();
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

    describe('no language selected', function() {
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

      it('update translation language will be dispatched', function() {
        let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
        onSubmit(event);
        assert(
          dispatchProps.dispatch.calledWith({
            type: 'UPDATE_TRANSLATION_LANGUAGE',
            payload: {
              value: 'en'
            }
          }),
          'dispatch not called'
        );
      });

      it('if language is not selected, it redirects to the next page', function() {
        stateProps.language = '';
        let onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
        onSubmit(event);
        assert.equal(ownProps.history.entries[1].pathname, '/apply/choose-application');
      });
    });

    describe('#English selected', function() {
      let onSubmit;
      beforeEach(function() {
        stateProps.language = 'en';
        onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      });

      it('if english is selected, the updateTranslationLanguage action will be dispatched', function() {
        onSubmit(event);
        assert(
          dispatchProps.dispatch.calledWith({
            type: 'UPDATE_TRANSLATION_LANGUAGE',
            payload: {
              value: 'en'
            }
          }),
          'dispatch not called'
        );
      });

      it('update translation language will be dispatched', function() {
        onSubmit(event);
        assert(
          dispatchProps.dispatch.calledWith({
            type: 'UPDATE_TRANSLATION_LANGUAGE',
            payload: {
              value: 'en'
            }
          }),
          'dispatch not called'
        );
      });

      it('does not dispatch a call to get translations', function() {
        onSubmit(event);
        assert(!dispatchProps.dispatch.calledWith({
          type: 'UPDATE_API_STATUS',
          payload: {
            value: 'loading'
          }
        }), 'dispatch to get translation should not have been called, but was');
      });

      it('if language is selected as english, it redirects to the next page', function() {
        onSubmit(event);
        assert.equal(ownProps.history.entries[1].pathname, '/apply/choose-application');
      });
    });

    describe('#non-English language selected', function() {
      let onSubmit;
      beforeEach(function() {
        stateProps.language = 'es';
        onSubmit = onSubmitDispatches.applicationLanguageSubmit(stateProps, dispatchProps.dispatch, ownProps);
      });

      it('calls getTranslation function', function() {
      });

      it('redirects to the next page', function() {
        onSubmit(event);
        assert.equal(ownProps.history.entries[1].pathname, '/apply/choose-application');
      });

    });
  });

});
