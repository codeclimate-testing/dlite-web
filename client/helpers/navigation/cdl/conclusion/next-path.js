'use strict';

export const cdlSummary = (res) => {
  let key = 'cdlSummary';
  if(res === 'success') {
    key = 'cdlAppointmentPrep';
  }
  return key;
};