'use strict';

function dateOfBirth(application) {
  let date_of_birth = {
    day: '',
    month: '',
    year: ''
  };

  if(application.date_of_birth){
    date_of_birth = {
      day: (new Date(application.date_of_birth).getDate()).toString(),
      month: (new Date(application.date_of_birth).getMonth() + 1).toString(),
      year: (new Date(application.date_of_birth).getFullYear()).toString()
    }
  }
  return date_of_birth;

}

module.exports = dateOfBirth;