'use strict';

import React from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import { getDL }          from '../../../helpers/data/card-type';
import Translator         from '../../../i18n/translator-tag.jsx';

const VeteransPreviousDesignation = (props) => {
  const headerDL = <Translator tag='h2' className='question' translationPath = 'myHistory.veteransPage.existingDesignation.promptLicense' tabIndex='0' />
  const headerID = <Translator tag='h2' className='question' translationPath = 'myHistory.veteransPage.existingDesignation.promptID' tabIndex='0' />

  if (!props.showIf) { return null; }

  const headerText = getDL(props) ? headerDL : headerID;

  return (
    <div className='veterans-previous-designation-form'>
      { headerText }
      <div className='input-container'>
        <fieldset role='group' aria-label='Card has veterans desgination'>
          <RadioCollection
            {...props}
            name  = 'previouslyDesignated'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;
