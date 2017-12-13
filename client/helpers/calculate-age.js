'use strict';

export const getCurrentAge = (year, month, day, now = new Date()) => {
  let d = now;

  let yearDiff = d.getFullYear() - parseInt(year, 10);

  let monthDiff = (d.getMonth() + 1) - parseInt(month, 10);

  let dayDiff = d.getDate() - parseInt(day, 10);

  let fraction = Math.abs( monthDiff / 12 ) + dayDiff / 365;

  // if the birthday has not occurred this year, remove an integer value of one from yearDiff
  if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0 )){
    yearDiff --;
  }

  return yearDiff + fraction
};

export const isPreregistering = (dateOfBirth, now = new Date()) => {
  let age = getCurrentAge(dateOfBirth.year, dateOfBirth.month, dateOfBirth.day, now);
  return age >= 16 && age < 18;
};
