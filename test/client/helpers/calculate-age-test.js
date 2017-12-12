'use strict';

import assert from 'assert';
import { getCurrentAge } from '../../../client/helpers/calculate-age';

describe('calculate user age', function () {

  describe('age 15 boundaries', function () {

    it('user age is less than 15', function () {
      let year = (new Date().getFullYear()) - 14;
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age < 15, 'age should be less than 15');
    });

    it('user age is greater than 15', function () {
      let year = '1982';
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age > 15, 'age should be greater than 15');
    });

    it('user age is equals to 15', function () {
      let year = (new Date().getFullYear()) - 15;
      let month = (new Date().getMonth()) + 1;
      let day = new Date().getDate();
      let age = getCurrentAge(year, month, day);
      assert(age = 15, 'age should be equal to 15');
    });
  });

  describe('age 16 boundaries', function () {

    it('user age is less than 16', function () {
      let year = (new Date().getFullYear()) - 15;
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age < 16, 'age should be less than 16');
    });

    it('user age is greater than 16', function () {
      let year = '1984';
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age > 16, 'age should be greater than 16');
    });

    it('user age is equals to 16', function () {
      let year = (new Date().getFullYear()) - 16;
      let month = (new Date().getMonth()) + 1;
      let day = new Date().getDate();
      let age = getCurrentAge(year, month, day);
      assert(age = 16, 'age should be equal to 16');
    });
  });

  describe('age 17 boundaries', function () {

    it('user age is less than 17', function () {
      let year = (new Date().getFullYear()) - 16;
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age < 17, 'age should be less than 17');
    });

    it('user age is greater than 17', function () {
      let year = '1999';
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age > 17, 'age should be greater than 17');
    });

    it('user age is equals to 17', function () {
      let year = (new Date().getFullYear()) - 17;
      let month = (new Date().getMonth()) + 1;
      let day = new Date().getDate();
      let age = getCurrentAge(year, month, day);
      assert(age = 15, 'age should be equal to 17');
    });
  });

    describe('age 18 boundaries', function () {

    it('user age is less than 18', function () {
      let year = (new Date().getFullYear()) - 17;
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age < 18, 'age should be less than 18');
    });

    it('user age is greater than 18', function () {
      let year = '1988';
      let month = '10';
      let day = '15';
      let age = getCurrentAge(year, month, day);
      assert(age > 18, 'age should be greater than 18');
    });

    it('user age is equals to 18', function () {
      let year = (new Date().getFullYear()) - 18;
      let month = (new Date().getMonth()) + 1;
      let day = new Date().getDate();
      let age = getCurrentAge(year, month, day);
      assert(age = 15, 'age should be equal to 18');
    });
  });
});