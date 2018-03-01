'use strict';

import {
  hasExistingCard
}    from '../../data/card-actions';

export const cdlWdywtdt = (props) => {
  let key = 'cdlResidency';
  if (hasExistingCard(props)) {
    key = 'cdlCurrentCard';
  }
  return key;
};