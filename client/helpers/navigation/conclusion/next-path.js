'use strict';

export const summary = (res) => {
  let key = 'summary';
  if(res === 'success') {
    key = 'appointmentPreparation';
  }
  return key;
};