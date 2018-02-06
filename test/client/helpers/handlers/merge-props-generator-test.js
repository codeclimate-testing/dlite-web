'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import mergePropsGenerator      from '../../../../client/helpers/handlers/merge-props';
import { createMemoryHistory }  from 'history';

describe('mergeProps Generator', function() {
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
      application: '',
      server: '',
      ui: {
        focus: ''
      }
    };
  });

  // it('has props', function() {
  //   let action = () => {
  //     return;
  //   };
  //   let onSubmitFunction = () => {
  //     return ;
  //   }
  //   let mergeProps = mergePropsGenerator(action, onSubmitFunction);
  // });
});