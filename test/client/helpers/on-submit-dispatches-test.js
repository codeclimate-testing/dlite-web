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

  describe('#useAPI', function() {
    // TODO: if possible, test the useAPI function with a promise

    // it('dispatches the postData API call to update api status to loading', function() {
    //   dispatchProps.dispatch = stub();
    //   let onSubmit = onSubmitDispatches.useAPI(stateProps, dispatchProps.dispatch, ownProps);
    //   onSubmit(event);
    //   assert(
    //     dispatchProps.dispatch.calledWith({
    //       type: 'UPDATE_API_STATUS',
    //       payload: {
    //         value: 'loading'
    //       }
    //     }),
    //     'dispatch to set api status to loading not called'
    //   );
    // });
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
      assert.equal(ownProps.history.entries[1].pathname, '/apply/choose');
    });
  });

  describe('#isPreRegistering', function() {
    it('dispatch action to update pre registering to Yes', function() {
      let now     = new Date();
      let day     = now.getDate();
      let month   = now.getMonth();
      let year    = now.getFullYear() - 17;
      stateProps.dateOfBirth = { year, month, day};
      let onSubmit = onSubmitDispatches.isPreRegistering(stateProps, dispatchProps.dispatch);
      onSubmit(event);
      assert(
        dispatchProps.dispatch.calledWith({
          type: 'UPDATE_IS_PRE_REGISTERING',
          payload: {
            name: 'isPreregistering',
            value: 'Yes'
          }
        }),
        'dispatch not called with Yes'
      );
    });

    it('dispatch action to update pre registering to No', function() {
      let now     = new Date();
      let day     = now.getDate();
      let month   = now.getMonth();
      let year    = now.getFullYear() - 19;
      stateProps.dateOfBirth = { year, month, day};
      let onSubmit = onSubmitDispatches.isPreRegistering(stateProps, dispatchProps.dispatch);
      onSubmit(event);
      assert(
        dispatchProps.dispatch.calledWith({
          type: 'UPDATE_IS_PRE_REGISTERING',
          payload: {
            name: 'isPreregistering',
            value: 'No'
          }
        }),
        'dispatch not called with No'
      );
    });

  });

});