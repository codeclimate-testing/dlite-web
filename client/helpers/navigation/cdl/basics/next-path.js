'use strict';
import { editFlow }   from '../../../data/pathnames';
import {
  hasExistingCard
} from '../../../data/card-actions';

export const cdlSSN = (props) => {
  let key = 'cdlSummary';
  if (!editFlow(props)) {
    key = 'cdlRealID';
    if (!hasExistingCard(props)) {
      key = 'cdlCurrentDL';
    }
  }
  return key;
};