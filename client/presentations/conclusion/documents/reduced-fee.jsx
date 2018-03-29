'use strict';

import React                  from 'react';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import Translator             from '../../../i18n/translator-tag.jsx';

const ReducedFee = (props) => {
  if (!choosingReducedFee(props)) {return null;}

  return (
    <div key='reduced-fee'>
      <Translator
        tag             = 'h4'
        className       = 'reduced-fee'
        translationPath = 'applicationPreparationPage.reducedFeeSection.header'
      />
      <Translator
        tag             = 'p'
        translationPath = 'applicationPreparationPage.reducedFeeSection.body'
      />
      <Translator
        tag             = 'h4'
        className       = 'no-fee'
        translationPath = 'applicationPreparationPage.noFeeSection.header'
      />
      <Translator
        tag             = 'p'
        translationPath = 'applicationPreparationPage.noFeeSection.body'
      />
    </div>
  );
};

export default ReducedFee;
