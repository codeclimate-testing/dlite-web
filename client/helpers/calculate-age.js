export const getCurrentAge = (year, month, day) => {
  let d = new Date();

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

export const getAgeGroup = (age) => {

  if ((age > 15 ) && (age < 18)) {
    return "YOUTH_GREATER_THAN_15_AND_LESS_THAN_18"
  }
}
