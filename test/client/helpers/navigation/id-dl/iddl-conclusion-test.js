'use strict';

const assert = require('assert');

import {
  summary
} from '../../../../../client/helpers/navigation/id-dl/conclusion/next-path';


describe('Data helpers for determining next path from current page and props', function() {

  describe('#conclusion section', function() {
    describe('#summary', function() {
      it('goes to application prep page if server apiStatus is successful', function() {
        let res = 'success'
        assert.equal(summary(res), 'appointmentPreparation');
      });
      it('goes to summary page if server apiStatus is unsuccessful', function() {
        let res = 'api-fail'
        assert.equal(summary(res), 'summary');
      });
    });
  });
});

