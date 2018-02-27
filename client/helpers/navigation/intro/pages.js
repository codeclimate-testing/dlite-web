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
    key: 'IDme',
    description: 'ID Me',
    path: '/id-and-license/sign-in',
    next: 'welcome'
  }
];

export default intro;