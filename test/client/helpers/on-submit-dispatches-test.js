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
      language: {
        appLanguage: '',
        ballotLanguage: ''
      },
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
      stateProps.appLanguage = 'es';
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
      assert.equal(ownProps.history.entries[1].pathname, '/apply/choose-application');
    });
  });
});