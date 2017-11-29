import moment from 'moment';

export default (year, month, day) => {
  let d = moment().add(1, 'M');
  let yearDiff = d.year() - parseInt(year, 10);
  let currentMonth = d.month();
  let monthDiff = currentMonth - parseInt(month, 10);
  let today = moment().format('MMDDYYYY');

  if(monthDiff < 0 || (monthDiff === 0 && today < parseInt(day, 10))){
    yearDiff --;
  }
  
  return yearDiff

};
