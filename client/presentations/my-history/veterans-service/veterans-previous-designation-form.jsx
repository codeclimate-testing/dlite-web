'use strict';

import React from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import { getDL }          from '../../../helpers/data/card-type';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const headerDL = convertToHtml('h2', translations.myHistory.veteransPage.existingDesignation.promptLicense, 'question');
const headerID = convertToHtml('h2', translations.myHistory.veteransPage.existingDesignation.promptID, 'question');

const VeteransPreviousDesignation = (props) => {
  if (!props.showIf) { return null; }

  const headerText = getDL(props) ? headerDL : headerID;

  return (
    <div className='veterans-previous-designation-form'>
      { headerText }
      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name='previouslyDesignated'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;
