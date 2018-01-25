'use strict';

import assert from 'assert';
import {
  getCurrentAge,
  isPreregistering,
  ageChecks,
  canBeSenior
} from '../../../client/helpers/calculate-age';

describe('calculate user age', function () {
  describe('age 14 boundaries', function(){
    it('user age is a day less than 14', function() {
      let now = new Date(2017, 11, 11);
      let age = getCurrentAge({
        year: 2003,
        month: 12, 
        day: 12
      }, now);

      assert(age < 14 && age > 13, 'age should be less than 14');
    });

    it('user just turned 14 today', function() {
      let now = new Date(2017, 11, 11);
      let age = getCurrentAge({
        year: 2003,
        month: 12,
        day: 11
      }, now);

      assert(age >= 14 && age < 15, 'age should not be less than 14');
    });
  });

  describe('age 15 boundaries', function () {
    it('dob is day before turning 15', function () {

      let age = getCurrentAge({
        year: 2002, 
        month: 12, 
        day: 13
      }, new Date(2017, 11, 12));
      assert(age < 15 && age > 14, 'age should be less than 15 but greater than 14');
    });

    it('user age is greater than 15', function () {
      let age = getCurrentAge({
        year: 1982,
        month: 10,
        day: 15
      });
      assert(age > 15, 'age should be greater than 15');
    });

    it('dob is turning 15', function () {

      let age = getCurrentAge({
        year: 2002,
        month: 12,
        day: 12
      }, new Date(2017, 11, 12));
      assert(age >= 15 && age < 16, 'age should be equal to 15');
    });
  });

  describe('age 15.5 boundaries', function() {

    it('user age is a day under 15.5', function() {
      let now = new Date(2017, 11, 11);

      let age = getCurrentAge({
        year: 2002,
        month: 6,
        day: 12
      }, now);
   
      assert( age > 15 && age < 15.5, 'age should be less than 15.5');
    });

    it('user turned 15.5 today', function() {
      let now = new Date(2017, 11, 11);
      let age = getCurrentAge({
        year: 2002,
        month: 6,
        day: 11
      }, now);
   
      assert( age >= 15.5 && age < 16, 'age should not be less than 15.5');
    });

    it('user age is a day over 15.5', function(){
      let now = new Date(2017, 11, 11);
      let age = getCurrentAge({
        year: 2002,
        month: 6,
        day: 10
      }, now);
    
      assert( age > 15.5 && age < 16, 'age should be greater than 15.5');
    });
  });

  describe('age 16 boundaries', function () {

    it('dob date is day before turning 16', function () {
      
      let age = getCurrentAge({
        year: 2001,
        month: 12,
        day: 13
      }, new Date(2017, 11, 12));
      assert(age < 16 && age > 15, 'age should be less than 16 but greater than 15');
    });

    it('user age is greater than 16', function () {

      let age = getCurrentAge({
        year: 1984,
        month: 10,
        day: 15
      });
      assert(age > 16, 'age should be greater than 16');
    });

    it('dob is day turning 16', function () {
      let dob = {
        month: '12',
        year: '2001',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      let age = getCurrentAge(dob, mockNow);
      assert(age >= 16 && age < 17, 'age should be equal to 16 but less than 17');
    });
  });

  describe('age 17 boundaries', function () {

    it('dob is days before turning 17', function () {
      let dob = {
        month: '12',
        year: '2000',
        day: '29'
      };
      let mockNow = new Date(2017, 11, 12);

      let age = getCurrentAge(dob, mockNow);

      assert(age <= 17 && age > 16.5, 'age should be less than 17 but greater than 16.5');
    });

    it('dob is day turning 17', function () {
      let dob = {
        month: '12',
        year: '2000',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      let age = getCurrentAge(dob, mockNow);

      assert(age >= 17 && age < 17.5, 'age should be greater than 17 but less than 17.5');
    });
  });

  describe('age 18 boundaries', function () {

    it('dob years before turning 18', function () {
      let dob = {
        month: '12',
        year: '2006',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      let age = getCurrentAge(dob, mockNow);
      assert(age < 18, 'age should be less than 18');
    });


    it('dob is day turning 18', function () {
      let dob = {
        month: '12',
        year: '1999',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      let age = getCurrentAge(dob, mockNow);
      assert(age >= 18 && age < 18.5, 'age should be greater than or equal to 18');
    });
  });

  describe('age 62 boundaries', function() {
    it('dob is day before turning 62', function() {
      let dob = {
        month: 1,
        year: 1955,
        day: 13
      };
      let mockNow = new Date(2017, 0, 12);
      let age = getCurrentAge(dob, mockNow);
      assert(age < 62 && age > 61.5, 'age should be less than 62 but greater than 61.5');
    });
  
  })
});


describe('age helpers', function() {
  describe('canBeSenior', function() {
    it('should be false if dob is one day less than 62', function() {
      let dob = {
        month: 1,
        year: 1955,
        day: 13
      };
      let mockNow = new Date(2017, 0, 12);
      assert.equal(canBeSenior(dob, mockNow), false);
    });
    it('should be false if dob is years under 62', function() {
      let dob = {
        month: 9,
        year: 1967,
        day: 7
      };
      let mockNow = new Date(2017, 11, 13);
      assert.equal(canBeSenior(dob, mockNow), false);
    });
    it('should be true if dob is turning 62', function() {
      let dob = {
        month: 2,
        year: 1955,
        day: 24
      };
      let mockNow = new Date(2017, 1, 24);
      assert.equal(canBeSenior(dob, mockNow), true);
    });
  });

  describe('isPreregistering', function() {
    it('should be false if the dob is one day less than 16', function() {
      let dob = {
        month: '12',
        year: '2001',
        day: '13'
      };
      let mockNow = new Date(2017, 11, 12);

      assert.equal(isPreregistering(dob, mockNow), false);
    });

    it('should be true if the dob is the date you turn 16', function() {
      let dob = {
        month: '12',
        year: '2001',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      assert.equal(isPreregistering(dob, mockNow), true);
    });

    it('should be true if the dob is the day before you turn 18', function() {
      let dob = {
        month: '12',
        year: '1999',
        day: '13'
      };
      let mockNow = new Date(2017, 11, 12);

      assert.equal(isPreregistering(dob, mockNow), true);
    });

    it('should be false if dob is the day turning 18', function() {
      let dob = {
        month: '12',
        year: '1999',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      assert.equal(isPreregistering(dob, mockNow), false);
    });
  });

  describe('age checks', function() {
    describe('Under 14', function() {
      it('should be true if dob is the day before turning 14', function() {
        let dob = {
          month: '12',
          year: '2003',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under14(dob, mockNow), true);
      });

     it('should be false is dob is the day turning 14', function() {
        let dob = {
          month: '12',
          year: '2003',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under14(dob, mockNow), false);
      });

    });

    describe('Under 15', function() {
      it('should be true if dob is the day before turning 15', function() {
        let dob = {
          month: '12',
          year: '2002',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under15(dob, mockNow), true);
      });
    
    describe('Under 15', function() {
      it('should be true age is 12', function() {
        let dob = {
          month: '1',
          year: '2005',
          day: '24'
        };
        let mockNow = new Date(2017, 1, 24);
  
        assert.equal(ageChecks.Under15(dob, mockNow), true);
        assert.equal(ageChecks.Under16(dob, mockNow), true);
        });
      });
    
    describe('Under 15', function() {
      it('should be true age is 13', function() {
        let dob = {
          month: '1',
          year: '2004',
          day: '24'
        };
        let mockNow = new Date(2017, 1, 24);
  
        assert.equal(ageChecks.Under15(dob, mockNow), true);
        assert.equal(ageChecks.Under16(dob, mockNow), true);
        });
      });

    describe('Under 15', function() {
      it('should be true age is 14', function() {
        let dob = {
          month: '1',
          year: '2003',
          day: '24'
        };
        let mockNow = new Date(2017, 1, 24);
  
        assert.equal(ageChecks.Under15(dob, mockNow), true);
        assert.equal(ageChecks.Under16(dob, mockNow), true);
        });
      });

      describe('Under 15', function() {
      it('should be true age is 14.9', function() {
        let dob = {
          month: '2',
          year: '2003',
          day: '1'
        };
        let mockNow = new Date(2017, 1, 24);
  
        assert.equal(ageChecks.Under15(dob, mockNow), true);
        assert.equal(ageChecks.Under16(dob, mockNow), true);
        });
      });

    describe('Under 15', function() {
      it('should be age 15', function() {
        let dob = {
          month: '1',
          year: '2002',
          day: '24'
        };
        let mockNow = new Date(2017, 1, 24);
  
        assert.equal(ageChecks.Under15(dob, mockNow), false);
        assert.equal(ageChecks.Under16(dob, mockNow), true);
        });
      });

      describe('Under 15', function() {
      it('should be true age is 15.1', function() {
        let dob = {
          month: '11',
          year: '2002',
          day: '23'
        };
        let mockNow = new Date(2017, 1, 25);
        let age = getCurrentAge(dob, mockNow);
        
        assert.equal(ageChecks.Under15(dob, mockNow), true);
        assert(age = 15, 'age should be 15');
        });
      });

      describe('Under 15', function() {
      it('should be true age is 15.3', function() {
        let dob = {
          month: '9',
          year: '2002',
          day: '23'
        };
        let mockNow = new Date(2017, 1, 25);
        let age = getCurrentAge(dob, mockNow);
        
        assert.equal(ageChecks.Under15(dob, mockNow), true);
        assert.equal(ageChecks.Under15Half(dob, mockNow), true);
        assert.equal(ageChecks.Under16(dob, mockNow), true);
        assert(age = 15, 'age should be 15');
        });
      });

      describe('Under 15', function() {
      it('should be true age is 15.4', function() {
        let dob = {
          month: '8',
          year: '2002',
          day: '23'
        };
        let mockNow = new Date(2017, 1, 25);
        let age = getCurrentAge(dob, mockNow);
        
        assert.equal(ageChecks.Under15(dob, mockNow), true);
        assert.equal(ageChecks.Under15Half(dob, mockNow), true);
        assert.equal(ageChecks.Under16(dob, mockNow), true);
        assert(age = 15, 'age should be 15');
        });
      });

      it('should be false if the dob is the day turning 15', function() {
        let dob = {
          month: '12',
          year: '2002',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under15(dob, mockNow), false);
      });
    });

    describe('Under15Half', function(){
      it('should be true if dob is the day before turning 15.5', function() {
        let dob = {
          month: '6',
          year: '2002',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
        let age = getCurrentAge(dob, mockNow);
  
        assert.equal(ageChecks.Under15Half(dob, mockNow), true);
        assert(age = 15.5, 'age should be 15.5');
      });

      it('should be false if the dob is the day turning 15.5', function() {
        let dob = {
          month: '6',
          year: '2002',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under15Half(dob, mockNow), false);
      });

      it('should be true age 15.6', function() {
        let dob = {
          month: '5',
          year: '2002',
          day: '22'
        };
        let mockNow = new Date(2017, 1, 25);
  
        assert.equal(ageChecks.Under15Half(dob, mockNow), true);
      });

    it('should be true age is 15.8', function() {
        let dob = {
          month: '3',
          year: '2002',
          day: '22'
        };
        let mockNow = new Date(2017, 1, 25);
  
        assert.equal(ageChecks.Under15Half(dob, mockNow), true);
      });
    });

    describe('Under16', function() {
      it('should be true if dob is the day before turning 16', function() {
        let dob = {
          month: '12',
          year: '2001',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under16(dob, mockNow), true);
      });

      it('should be false if the dob is the day turning 16', function() {
        let dob = {
          month: '12',
          year: '2001',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under16(dob, mockNow), false);
      });
    });

    describe('Under17Half', function() {
      it('should be true if dob is the day before turning 17.5', function() {
        let dob = {
          month: '6',
          year: '2000',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under17Half(dob, mockNow), true);
      });

      it('should be false if the dob is the day turning 17.5', function() {
        let dob = {
          month: '6',
          year: '2000',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.Under17Half(dob, mockNow), false);
      });
    });

    describe('Under18', function() {
      it('should be false if the dob is the day turning 18', function() {
        let dob = {
          month: 2,
          year: 1998,
          day: 12
        };
        let mockNow = new Date(2016, 1, 12);
        assert.equal(ageChecks.Under18(dob, mockNow), false);
      });

      it('should be true if the dob is one day from turning 18', function() {
        let dob = {
          month: 9,
          year: 1988,
          day: 29
        };
        let mockNow = new Date(2006, 8, 28);
 
        assert.equal(ageChecks.Under18(dob, mockNow), true);
      });
    });

    describe('GreaterThanEqual14', function() {
      it('should be true if dob is the day turning 14', function() {
        let dob = {
          month: '12',
          year: '2003',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual14(dob, mockNow), true);
      });

      it('should be false if dob is day before turning 14', function() {
        let dob = {
          month: '12',
          year: '2003',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual14(dob, mockNow), false);
      });

    });

    describe('GreaterThanEqual15', function() {
      it('should be true if dob is the day 15', function() {
        let dob = {
          month: '12',
          year: '2002',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual15(dob, mockNow), true);
      });

      it('should be false if dob is day before turning 15', function() {
        let dob = {
          month: '12',
          year: '2002',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual15(dob, mockNow), false);
      });
    });

    describe('GreaterThanEqual15Half', function() {
      it('should be true if dob is the day turning 15.5', function() {
        let dob = {
          month: '6',
          year: '2002',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual15Half(dob, mockNow), true);
      });

      it('should be false if dob is day before turning 15.5', function() {
        let dob = {
          month: '6',
          year: '2002',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual15Half(dob, mockNow), false);
      });
    });

    describe('GreaterThanEqual16', function() {
      it('should be true if dob is the day turning 16', function() {
        let dob = {
          month: '12',
          year: '2001',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual16(dob, mockNow), true);
      });

      it('should be false if dob is day before turning 16', function() {
        let dob = {
          month: '12',
          year: '2001',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual16(dob, mockNow), false);
      });
    });

    describe('GreaterThanEqual17Half', function() {
      it('should be true if dob is the day turning 17.5', function() {
        let dob = {
          month: '6',
          year: '2000',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual17Half(dob, mockNow), true);
      });

      it('should be false if dob is day before turning 17.5', function() {
        let dob = {
          month: '6',
          year: '2000',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual17Half(dob, mockNow), false);
      });
    });

    describe('GreaterThanEqual18', function() {
      it('should be true if dob is the day turning 18', function() {
        let dob = {
          month: '12',
          year: '1999',
          day: '12'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual18(dob, mockNow), true);
      });

      it('should be false if dob is day before turning 18', function() {
        let dob = {
          month: '12',
          year: '1999',
          day: '13'
        };
        let mockNow = new Date(2017, 11, 12);
  
        assert.equal(ageChecks.GreaterThanEqual18(dob, mockNow), false);
      });
    });
  });

});
