'use strict';
import {
  alicePath,
  iddlPath,
  addPath,
  cdlPath
} from '../alice-path';
import shared               from './intro/pages';
import * as iddl            from './id-dl/pages';
import * as cdl             from './cdl/pages';

const expand = (collection, action) => {
  return collection.map((item) => {
    let path = action(item.path);
    return Object.assign({}, item, {path: path});
  });
};

export default {
  shared              : {
    intro             : expand(shared, alicePath)
  },
  iddl                : {
    getStarted        : expand(iddl.getStarted, iddlPath),
    basics            : expand(iddl.basics, iddlPath),
    myHistory         : expand(iddl.myHistory, iddlPath),
    organDonation     : expand(iddl.organDonation, iddlPath),
    voterRegistration : expand(iddl.voterRegistration, iddlPath),
    conclusion        : expand(iddl.conclusion, iddlPath),
    addID             : expand(iddl.addID, addPath),
    addDL             : expand(iddl.addDL, addPath)
  },
  cdl                 : {
    getStarted        : expand(cdl.getStarted, cdlPath),
    basics            : expand(cdl.basics, cdlPath),
    myHistory         : expand(cdl.myHistory, cdlPath),
    conclusion        : expand(cdl.conclusion, cdlPath)
  }
};

