'use strict';

import { isPreregistering } from './calculate-age';

export const pageTitle = (dateOfBirth, now = new Date()) => {
  return `DMV: License application - ${sectionName(dateOfBirth, now)}`;
};

export const sectionName = (dateOfBirth, now = new Date()) => {
  let title = 'Voting ';
  if (isPreregistering(dateOfBirth)) {
    title += 'pre-registration';
  } else {
    title += 'registration';
  }
  return title;
};
