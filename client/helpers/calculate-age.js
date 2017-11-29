import Moment from 'moment';

export default (year, month, day) => {
  let d = moment();
  let yearDiff = moment().year() - parseInt(year, 10);
  let currentMonth = moment().month() + 1;
  let monthDiff = currentMonth - parseInt(month, 10);
  let today = moment().date()

  if(monthDiff < 0 || (monthDiff === 0 && today < parseInt(day, 10))){
    yearDiff --;
  }
  return yearDiff

};
