'use strict';

export const getCurrentAge = (dob, now = new Date() ) => {

  let yearDiff = now.getFullYear() - parseInt(dob.year, 10);

  let monthDiff = (now.getMonth() + 1) - parseInt(dob.month, 10);

  let dayDiff = now.getDate() - parseInt(dob.day, 10);

  let fraction = Math.abs( monthDiff / 12 );

  // if the birthday has not occurred this year, add the positive or negative day fraction to fraction total
  if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0 ) || (monthDiff === 6 && dayDiff < 0)){
    fraction +=  dayDiff / 365 ;

  } else {
    fraction += Math.abs( dayDiff / 365 );
  }

  return yearDiff + fraction
};

export const getAgeGroup = (age) => {
  if ((age > 15 ) && (age < 18)) {
    return "YOUTH_GREATER_THAN_15_AND_LESS_THAN_18";
  }
};

export const ageChecks =  {
  Under14                 : (dob, now = new Date() ) => { return getCurrentAge(dob, now) < 14; },
  Under15                 : (dob, now = new Date() ) => { return getCurrentAge(dob, now) < 15; },
  Under15Half             : (dob, now = new Date() ) => { return getCurrentAge(dob, now) < 15.5; },
  Under16                 : (dob, now = new Date() ) => { return getCurrentAge(dob, now) < 16; },
  Under17Half             : (dob, now = new Date() ) => { return getCurrentAge(dob, now) < 17.5; },
  Under18                 : (dob, now = new Date() ) => { return getCurrentAge(dob, now) < 18 },
  GreaterThanEqual14      : (dob, now = new Date() ) => { return getCurrentAge(dob, now) >= 14; },
  GreaterThanEqual15      : (dob, now = new Date() ) => { return getCurrentAge(dob, now) >= 15; },
  GreaterThanEqual15Half  : (dob, now = new Date() ) => { return getCurrentAge(dob, now) >= 15.5; },
  GreaterThanEqual16      : (dob, now = new Date() ) => { return getCurrentAge(dob, now) >= 16; },
  GreaterThanEqual17Half  : (dob, now = new Date() ) => { return getCurrentAge(dob, now) >= 17.5 },
  GreaterThanEqual18      : (dob, now = new Date() ) => { return getCurrentAge(dob, now) >= 18; }
};

export const isPreregistering = (dateOfBirth, now = new Date()) => {
  let age = getCurrentAge(dateOfBirth, now);
  return age >= 16 && age < 18;
};
