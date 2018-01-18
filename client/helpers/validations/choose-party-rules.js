'use strict';

import selectionValidator  from './selection-validator';

const chooseParty = (props) => {
  if (props.isSelected !== 'Yes') { return []; }
  return selectionValidator('politicalPartySelectionMissing', 'politicalPartyChoose')(props);
};

export default {
  isSelected: selectionValidator('choosePolicitalPartyNowSelectionMissing', 'isSelected'),
  politicalPartyChoose: chooseParty
};