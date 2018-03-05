'use strict';

import getStarted         from './get-started/pages';
import basics             from './basics/pages';
import myHistory          from './my-history/pages';
import conclusion         from './conclusion/pages';

const cdl = getStarted.concat(basics, myHistory, conclusion);

export default cdl;
