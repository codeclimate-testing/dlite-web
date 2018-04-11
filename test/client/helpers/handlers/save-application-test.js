'use strict';

import assert                   from 'assert';
import sinon                    from 'sinon';
import { saveApplication }      from '../../../../client/helpers/handlers/save-application';
import { createMemoryHistory }  from 'history';

describe('saveApplication handler', function() {
  let event, stateProps, dispatch, appType, postData, onSubmit;

  beforeEach(function() {
    event = { preventDefault: sinon.spy() };
    appType = 'application';
    dispatch = function() {
      postData()
      return Promise.resolve();
    };

    stateProps = {
      application: {},
      cdl: {},
      server: {
        userData: {
          userID: ''
        }
      },
      history: createMemoryHistory()
    };

    // postData = function(app){
    //   console.log(app)
    //   return Promise.resolve(app);
    // };

    postData = sinon.spy();

    onSubmit = saveApplication(dispatch);

  });

  it('when called with stop the form from doing a default submission', function() {
    let submit = onSubmit(stateProps, appType);
    submit(event);
    assert(event.preventDefault.called, 'event not prevented from doing a real submission');
  });

  it('posts the stateProps.application data when appType is application', function() {
    let submit = onSubmit(stateProps, appType);
    submit(event)
  });

  it('posts the stateProps.cdl data when appType is cdl', function() {
    appType = 'cdl';
    let submit = onSubmit(stateProps, appType);
    //submit(event)
  });

  it('pushes to summary page when appType is application', function() {
    let submit = onSubmit(stateProps, appType);
    //submit(event)
  });

  it('pushes to summary page when appType is cdl', function() {
    appType = 'cdl';
    let submit = onSubmit(stateProps, appType);
    //submit(event)
  });
});

