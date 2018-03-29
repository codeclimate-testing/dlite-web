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
    key: 'loggedIn',
    description: 'page server redirects to after successful login. on dev mode it sets isLoggedIn cookie to true',
    path: '/logged-in',
    next: 'legalName'
  },
  {
   key: 'disclaimers',
   description: 'Disclaimers',
   path: '/disclaimers',
   next: 'IDme'
  },
  {
    key: 'links',
    description: "links page that you're on right now",
    path: '/links',
    next: 'summary'
  }
];

export default intro;