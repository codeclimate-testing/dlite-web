'use strict';
import { cdlSummary }   from './next-path';

const conclusion = [
  {
    key: 'cdlSummary',
    description: 'summary of CDL app',
    path: '/summary',
    next: cdlSummary
  },
  {
    key: 'cdlAppointmentPrep',
    description: 'CDL appointment preparation',
    path: '/appointment-preparation',
    next: 'cdlAppointmentPrep'
  }
];

export default conclusion;