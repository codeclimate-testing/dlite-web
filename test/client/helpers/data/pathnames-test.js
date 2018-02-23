'use strict';

const assert = require('assert');

import {
  onIDFlow,
  getTextFromState,
  getTextFromPathname,
  addingApp,
  splitPathname,
  getActionFromState,
  hasChosenApp,
  goToSummary
} from '../../../../client/helpers/data/pathnames';

describe('Data helpers for pathnames', function() {

  let props;
    beforeEach(function() {
      props = {
        location: {
          pathname: '',
          nextAddress: ''
        }
      };
    });
  describe('#onIDFlow', function() {

    it('returns true if pathname begins with string /add/id-card', function() {
      props.location.pathname = '/add/id-card';
      assert.equal(onIDFlow(props), true);
    });

    it('returns false if pathname begins with string /apply/', function() {
      props.location.pathname = '/apply/what-do-you-want-to-do-today';
      assert.equal(onIDFlow(props), false);
    });
  });

  describe('#getTextFromState', function() {

    const applyString = 'I am going through the initial flow';
    const addString = 'I am adding another card after reaching the summary';

    beforeEach(function() {
      props = {
        addApp: ''
      }
    });

    it('returns third argument if addApp state is "driver-license"', function() {
      props.addApp = 'driver-license';
      assert.deepEqual(getTextFromState(props, applyString, addString), addString);
    });

    it('returns the second argument if addApp state is blank', function() {
      assert.deepEqual(getTextFromState(props, applyString, addString), applyString);
    });

    it('returns the third argument if addApp state is "id-card"', function() {
      props.addApp = 'id-card';
      assert.deepEqual(getTextFromState(props, applyString, addString), addString);
    });
  });

  describe('#getTextFromPathname', function() {
    const DLText = 'Now I want to add a DL';
    const IDText = 'Now I want to add an ID';
    const initialText = 'This is the regular initial flow';

    beforeEach(function() {
      props = {
        location: {
          pathname: ''
        },
        sectionKey: 'intro'
      };
    });

    it('returns DLString if user is on a url to add DL to existing app', function() {
      props.location.pathname = '/add/driver-license/';
      assert.equal(getTextFromPathname(props, initialText, DLText, IDText), DLText);
    });

    it('returns "id-card" if user is on a url to add an ID to existing application', function() {
      props.location.pathname = '/add/id-card/';
      assert.equal(getTextFromPathname(props, initialText, DLText, IDText), IDText);
    });

    it('returns the second argument if user is on initial flow', function() {
      assert.equal(getTextFromPathname(props, initialText, DLText, IDText), initialText);
    });
  });

  describe('#addingApp', function() {
    it('returns true if value equals "driver-license"', function() {
      assert.equal(addingApp('driver-license'), true);
    });

    it('returns true if value equals "id-card"', function() {
      assert.equal(addingApp('id-card'), true);
    });

    it('returns false if value equals "intro"', function() {
      assert.equal(addingApp('intro'), false);
    });
  });

  describe('#splitPathname', function() {
    it('returns "driver-license" in the url for the add DL wdywtdt page', function() {
      let pathname = '/add/driver-license/what-do-you-want-to-do-today';
      assert.equal(splitPathname(pathname), 'driver-license');
    });

    it('returns "id-card" in the url for the add ID wdywtdt url', function() {
      let pathname = '/add/id-card/what-do-you-want-to-do-today';
      assert.equal(splitPathname(pathname), 'id-card');
    });
  });

  describe('#getActionFromState', function() {
    let state;
    beforeEach(function() {
      state = {
        application: {
          cardAction: 'default',
          DLApp: {
            action: 'DL action'
          },
          IDApp: {
            action: 'ID action'
          }
        },
        ui: {
          addApp: ''
        }
      };
    })
    it('returns the DLApp action if addApp state is "driver-license"', function() {
      state.ui.addApp = 'driver-license';
      assert.equal(getActionFromState(state), state.application.DLApp.action);
    });
    it('returns the IDApp action if addApp state is "id-card"', function() {
      state.ui.addApp = 'id-card';
      assert.equal(getActionFromState(state), state.application.IDApp.action);
    });
    it('returns the default cardAction if page is regular flow', function() {
      state.ui.addApp = 'id-and-card';
      assert.equal(getActionFromState(state), state.application.cardAction);
    });
  });

  describe('#hasChosenApp', function() {
    it('returns true if props.chooseApp equals "cdl"', function() {
      let props = {
        chooseApp: 'cdl'
      };
      assert.equal(hasChosenApp(props), true);
    });
    it('returns true if props.chooseApp equals "iddl"', function() {
      let props = {
        chooseApp: 'iddl'
      };
      assert.equal(hasChosenApp(props), true);
    });
    it('returns false if props.chooseApp is blank', function() {
      let props = {
        chooseApp: ''
      };
      assert.equal(hasChosenApp(props), false);
    });
  });

  describe('#goToSummary', function() {
    it('returns false if props location does not have state object', function() {
      assert.equal(goToSummary(props), false);
    });
    it('returns false if location state nextAddress does not equal "summary" or "cdlSummary"', function() {
      props.location.state = {
        nextAddress: 'someOtherOne'
      };
      assert.equal(goToSummary(props), false);
    });
    it('returns true if location state nextAddress equals "summary"', function() {
      props.location.state = {
        nextAddress: 'summary'
      };
      assert.equal(goToSummary(props), true);
    });
    it('returns true if location state nextAddress equals "cdlSummary"', function() {
      props.location.state = {
        nextAddress: 'cdlSummary'
      };
      assert.equal(goToSummary(props), true);
    });
  });
});
