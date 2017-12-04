export default (year, month, day) => {
  let d = new Date();
  let yearDiff = d.getFullYear() - parseInt(year, 10);
  let currentMonth = d.getMonth() + 1;
  let monthDiff = currentMonth - parseInt(month, 10);
  let today = d.getDate();

  if(monthDiff < 0 || (monthDiff === 0 && today < parseInt(day, 10))){
    yearDiff --;
  }
  return yearDiff
};