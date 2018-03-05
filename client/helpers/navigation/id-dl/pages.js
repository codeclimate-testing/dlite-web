'use strict';

import getStarted         from './get-started/pages';
import basics             from './my-basics/pages';
import myHistory          from './my-history/pages';
import organDonation      from './organ-donation/pages';
import voterRegistration  from './voter-registration/pages';
import conclusion         from './conclusion/pages';
import addID              from './add-id/pages';
import addDL              from './add-dl/pages';

const iddl = getStarted.concat(basics, myHistory, organDonation, voterRegistration, addID, addDL, conclusion);

export default iddl;
