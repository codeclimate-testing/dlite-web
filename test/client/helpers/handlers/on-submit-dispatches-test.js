'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import * as onSubmitDispatches  from '../../../../client/helpers/handlers/on-submit-dispatches';
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
      application: {
        language: {
          appLanguage: '',
          ballotLanguage: ''
        }
      },
      server: '',
      ui: {
        focus: ''
      }
    };
  });

  describe('#updateCitizenship', function() {

  });

  describe('#useAPI', function() {

  });

  describe('#defaultLanguage', function() {
    it('if appLanguage is blank the updateLanguage action will be dispatched', function() {
      let onSubmit = onSubmitDispatches.defaultLanguage(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert(
        dispatchProps.dispatch.calledWith({
          type: 'UPDATE_LANGUAGE',
          payload: {
            name: 'appLanguage',
            value: 'en'
          }
        }),
        'dispatch not called'
      );
    });

    it('if appLanguage has been chosen the updateLanguage action will not be dispatched', function() {
      stateProps.application.appLanguage = 'es';
      let onSubmit = onSubmitDispatches.defaultLanguage(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert(
        !dispatchProps.dispatch.calledWith({
          type: 'UPDATE_LANGUAGE',
          payload: {
            name: 'appLanguage',
            value: 'en'
          }
        }),
        'dispatch not called'
      );
    });

    it('the pathname will be updated to go to the choose application type page', function() {
      let onSubmit = onSubmitDispatches.defaultLanguage(stateProps, dispatchProps.dispatch, ownProps);
      onSubmit(event);
      assert.equal(ownProps.history.entries[1].pathname, '/apply/choose');
    });
  });

});
