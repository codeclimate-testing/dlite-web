'use strict';

import assert from 'assert';
import sectionReducer from '../../../../client/reducers/ui/section';
import { start } from 'repl';

describe('sectionReducer', function() {
  it('does not update applicationType for non UPDATE_CARD_TYPE actions', function() {
    let state =  {
      applicationType: 'Card application',
      name: '',
      number: ''
    };
    assert.deepEqual(sectionReducer(state, {type: 'WHATEVER'}), state);
  });

  it('on card type "DL" updates applicationType to Drivers license application', function() {
    let state =  {
      applicationType: 'Card application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'DL'
      }
    };
    assert.equal(sectionReducer(state, action).applicationType, 'Drivers license application');
  });

  it('on card type "ID" updates applicationType to Identification card application', function() {
    let state =  {
      applicationType: 'Card application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'ID'
      }
    };
    assert.equal(sectionReducer(state, action).applicationType, 'Identification card application');
  });

  it('"Card application" on card type "DL-true" updates to "Drivers license application"', function() {
    let state =  {
      applicationType: 'Card application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'DL-true'
      }
    };
    assert.equal(sectionReducer(state, action).applicationType, 'Drivers license application');
  });

  it('"Identification card application" on card type "DL-true" updates to "Drivers license and ID application"', function() {
    let state =  {
      applicationType: 'Identification card application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'DL-true'
      }
    };

    assert.equal(sectionReducer(state, action).applicationType, 'Drivers license and ID application');
  });

  it('"Drivers license application" on card type "DL-false" updates to "Card application"', function() {
    let state =  {
      applicationType: 'Drivers license application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'DL-false'
      }
    };

    assert.equal(sectionReducer(state, action).applicationType, 'Card application');
  });

  it('"Drivers license and ID application" on card type "DL-false" updates to "Identification card application"', function() {
    let state =  {
      applicationType: 'Drivers license and ID application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'DL-false'
      }
    };

    assert.equal(sectionReducer(state, action).applicationType, 'Identification card application');
  });


  it('"Card application" on card type "ID-true" updates to "Identification card application"', function() {
    let state =  {
      applicationType: 'Card application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'ID-true'
      }
    };
    assert.equal(sectionReducer(state, action).applicationType, 'Identification card application');
  });

  it('"Drivers license application" on card type "ID-true" updates to "Drivers license and ID application"', function() {
    let state =  {
      applicationType: 'Drivers license application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'ID-true'
      }
    };

    assert.equal(sectionReducer(state, action).applicationType, 'Drivers license and ID application');
  });

  it('"Identification card application" on card type "ID-false" updates to "Card application"', function() {
    let state =  {
      applicationType: 'Identification card application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'ID-false'
      }
    };

    assert.equal(sectionReducer(state, action).applicationType, 'Card application');
  });

  it('"Drivers license and ID application" on card type "ID-false" updates to "Drivers license application"', function() {
    let state =  {
      applicationType: 'Drivers license and ID application',
      name: '',
      number: ''
    };
    let action = {
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: '',
        value: 'ID-false'
      }
    };

    assert.equal(sectionReducer(state, action).applicationType, 'Drivers license application');
  });
});
