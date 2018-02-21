'use strict';
import {
  alicePath,
  iddlPath,
  addPath,
  cdlPath
} from '../alice-path';
import intro                from './intro/pages';
import getStarted           from './get-started/pages';
import myBasics             from './my-basics/pages';
import myHistory            from './my-history/pages';
import voterRegistration    from './voter-registration/pages';
import organDonation        from './organ-donation/pages';
import conclusion           from './conclusion/pages';
import addDLCard            from './add-dl/pages';
import addIDCard            from './add-id/pages';
import cdl                  from './cdl/pages';

const expand = (collection, action) => {
  return collection.map((item) => {
    let path = action(item.path);
    return Object.assign({}, item, {path: path});
  });
};

export default {
  intro:            expand(intro, alicePath),
  getStarted:       expand(getStarted, iddlPath),
  myBasics:         expand(myBasics, iddlPath),
  myHistory:        expand(myHistory, iddlPath),
  organDonation:    expand(organDonation, iddlPath),
  voterRegistration: expand(voterRegistration, iddlPath),
  conclusion:       expand(conclusion, iddlPath),
  addDLCard:        expand(addDLCard, addPath),
  addIDCard:        expand(addIDCard, addPath),
  cdl:              expand(cdl, cdlPath)
};

