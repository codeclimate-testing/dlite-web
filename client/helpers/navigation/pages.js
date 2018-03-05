'use strict';
import {
  alicePath,
  iddlPath,
  addPath,
  cdlPath
} from '../alice-path';
import intro                from './intro/pages';
import iddl                 from './id-dl/pages';
import cdl                  from './cdl/pages';

const expand = (collection, action) => {
  return collection.map((item) => {
    let path = action(item.path);
    return Object.assign({}, item, {path: path});
  });
};

export default {
  intro             : expand(intro, alicePath),
  iddl              : expand(iddl, iddlPath),
  cdl               : expand(cdl, cdlPath)
};

