'use strict';

import { choosingReducedFee } from '../data/reduced-fee';
import selectionValidator     from './selection-validator';

let form = (props) => {
  if (!choosingReducedFee(props)) {
    return [];
  }
  return selectionValidator('selectionMissing', 'reducedFee', 'form')(props);
};

export default {
  reducedFee: selectionValidator('selectionMissing', 'reducedFee', 'ID'),
  form: form
};
