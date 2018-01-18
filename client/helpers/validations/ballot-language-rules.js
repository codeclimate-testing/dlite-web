'use strict';

import selectionValidator  from './selection-validator';

export default {
  ballotLanguage: selectionValidator('ballotLanguageSelectionMissing')
};