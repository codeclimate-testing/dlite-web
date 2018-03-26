'use strict';

import {
  chooseApplication
} from './next-path';

const intro = [
  {
    key: 'chooseLanguage',
    description: 'Choose language for app',
    path: '/choose-language',
    next: 'chooseApplication'
  },
  {
    key: 'chooseApplication',
    description: 'choose CDL or ID/DL application',
    path: '/choose-application',
    next: chooseApplication
  },
  {
   key: 'disclaimers',
   description: 'Disclaimers',
   path: '/disclaimers',
   next: 'IDme'
  }
];

export default intro;