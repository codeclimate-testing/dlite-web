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
    it('returns "cdlLegalName" if state.ui.chooseApp equals "cdl"', function() {
      props.chooseApp = 'cdl';
      assert.equal(chooseApplication(props), 'cdlLegalName');
    });

    it('returns "IDme" if state.ui.chooseApp equals "iddl"', function() {
      props.chooseApp = 'iddl';
      assert.equal(chooseApplication(props), 'IDme');
    });
  });
});
