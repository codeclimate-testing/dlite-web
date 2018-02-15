'use strict';

import { summary }    from './next-path';

const conclusion = [
  {
    key: 'summary',
    description: 'Summary',
    path: '/summary',
    next: summary
  },
  {
    key: 'appointmentPreparation',
    description: 'Appointment preparation',
    path: '/appointment-preparation'
  },
  {
    key: 'requiredDocuments',
    description: 'Required documents',
    path: '/appointment-preparation/documents'
  },
  {
    key: 'guardianSignature',
    description: 'Parent/Guardian Signature',
    path: '/guardian-signature',
    next: 'summary'
  }
];

export default conclusion;