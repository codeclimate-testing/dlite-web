'use strict';

import assert         from 'assert';
import { spy }        from 'sinon';
import mergeProps     from '../../../../client/helpers/handlers/choose-language';
import { createMemoryHistory }  from 'history';

describe('choose language mergeProps onSubmit function', function() {
  let event, stateProps, dispatchProps, ownProps, props;

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
      appLanguage: '',
      focused:    ''
    };

    props = mergeProps(stateProps, dispatchProps, ownProps);
  });

  it('if appLanguage is blank the updateLanguage reducer will be dispatched', function() {
    props.onSubmit(event);
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

  it('the pathname will be updated to go to the choose application type page', function() {
    props.onSubmit(event);
    assert.equal(props.history.entries[1].pathname, '/apply/choose');
  });
});
