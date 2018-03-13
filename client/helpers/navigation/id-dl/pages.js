'use strict';

import getStarted         from './get-started/pages';
import basics             from './my-basics/pages';
import myHistory          from './my-history/pages';
import organDonation      from './organ-donation/pages';
import voterRegistration  from './voter-registration/pages';
import conclusion         from './conclusion/pages';

const intro = [{
  key: 'IDme',
  description: 'IDme',
  path: '/apply/sign-in',
  next: 'IDme'
}];

export {
  intro,
  getStarted,
  basics,
  myHistory,
  organDonation,
  voterRegistration,
  conclusion
};
