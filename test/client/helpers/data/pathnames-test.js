'use strict';

const assert = require('assert');

import {
  startsWithAdd,
  ifAddLicense,
  setKeyFromPathname,
  addingApp,
  splitPathname
} from '../../../../client/helpers/data/pathnames';

describe('Data helpers for pathnames', function() {
  describe('#startsWithAdd', function() {
    it('returns true if pathname begins with string /add/', function() {
      let pathname = '/add/driver-license';
      assert.equal(startsWithAdd(pathname), true);
    });

    it('returns false if pathname begins with string /apply/', function() {
      let pathname = '/apply/what-do-you-want-to-do-today';
      assert.equal(startsWithAdd(pathname), false);
    });
  });

  describe('#ifAddLicense', function() {
    let addApp;
    const applyString = 'I am going through the initial flow';
    const addDLString = 'I am adding another DL card after reaching the summary';

    beforeEach(function() {
      addApp = '';
    });

    it('returns third argument if addApp state is "driver-license"', function() {
      addApp = 'driver-license';
      assert.equal(ifAddLicense(addApp, applyString, addDLString), addDLString);
    });

    it('returns the second argument if addApp state is blank', function() {
      assert.equal(ifAddLicense(addApp, applyString, addDLString), applyString);
    });
  });

  describe('#setKeyFromPathname', function() {
    let props;
    beforeEach(function() {
      props = {
        location: {
          pathname: ''
        },
        sectionKey: 'intro'
      };
    })
    it('returns "driver-license" if user is on a url to add DL to existing app', function() {
      props.location.pathname = '/add/driver-license/';
      assert.equal(setKeyFromPathname(props), 'driver-license');
    });

    it('returns "id-card" if user is on a url to add an ID to existing application', function() {
      props.location.pathname = '/add/id-card/';
      assert.equal(setKeyFromPathname(props), 'id-card');
    });

    it('returns the props.sectionKey if user is on initial flow', function() {
      assert.equal(setKeyFromPathname(props), 'intro');
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
});
