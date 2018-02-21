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
    key: 'id-dl',
    description: 'ID/DL welcome page',
    path: '/id-dl',
    next: 'IDme'
  },
  {
    key: 'IDme',
    description: 'ID Me',
    path: '/sign-in',
    next: 'welcome'
  }
];

export default intro;