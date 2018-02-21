'use strict';
import {
  alicePath,
  iddlPath,
  addPath,
  cdlPath
} from '../alice-path';
import getStarted           from './get-started/pages';
import myBasics             from './my-basics/pages';
import myHistory            from './my-history/pages';
import voterRegistration    from './voter-registration/pages';
import organDonation        from './organ-donation/pages';
import conclusion           from './conclusion/pages';
import addDLCard            from './add-dl/pages';
import addIDCard            from './add-id/pages';
import cdl                  from './cdl/pages';

const expand = (collection) => {
  return collection.map((item) => {
    let path = item.path.startsWith('/apply/') ? item.path : iddlPath(item.path);
    return Object.assign({}, item, {path: path});
  });
};

const expandAdd = (collection) => {
  return collection.map((item) => {
    let path = addPath(item.path);
    return Object.assign({}, item, {path: path});
  });
};

const expandCDL = (collection) => {
  return collection.map((item) => {
    let path = cdlPath(item.path);
    return Object.assign({}, item, {path: path});
  });
};

export default {
  getStarted: expand(getStarted),
  myBasics: expand(myBasics),
  myHistory: expand(myHistory),
  organDonation: expand(organDonation),
  voterRegistration: expand(voterRegistration),
  conclusion: expand(conclusion),
  addDLCard: expandAdd(addDLCard),
  addIDCard: expandAdd(addIDCard),
  cdl: expandCDL(cdl)
};

