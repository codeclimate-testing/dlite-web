'use strict';

import assert from 'assert';
import { getCurrentAge } from '../../../client/helpers/calculate-age';

describe('calculate user age', function() {

  describe('user is under 16', function(){

    it('user age is less than 16', function(){
      let year  = (new Date().getFullYear()) - 15;
      let month = '10';
      let day   = '15';
      let age   = getCurrentAge(year, month, day);
      assert(age < 16, 'age should be less than 16');
    });

    it('user age is greater than 16', function(){
      let year  = '1984';
      let month = '10';
      let day   = '15';
      let age   = getCurrentAge(year, month, day);
      assert(age > 16, 'age should be greater than 16');
    });

    it('user age is equals to 16', function(){
      let year  = (new Date().getFullYear()) - 16;
      let month = (new Date().getMonth()) + 1;
      let day   = new Date().getDate();
      let age   = getCurrentAge(year, month, day);
      assert(age = 16, 'age should be equal to 16');
    });

  });

});