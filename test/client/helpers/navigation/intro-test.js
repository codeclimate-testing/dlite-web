'use strict';

const assert = require('assert');

import {
  chooseApplication
} from '../../../../client/helpers/navigation/intro/next-path';


describe('Intro next-path', function() {

  let props;
  beforeEach(function() {
    props = {
      chooseApp: ''
    }
  });
  describe('##chooseApplication', function() {
    it('returns "cdl" if state.ui.chooseApp equals "cdl"', function() {
      props.chooseApp = 'cdl';
      assert.equal(chooseApplication(props), 'cdl');
    });
    it('returns "id-dl" if state.ui.chooseApp equals "iddl"', function() {
      props.chooseApp = 'iddl';
      assert.equal(chooseApplication(props), 'id-dl');
    });
  });
});