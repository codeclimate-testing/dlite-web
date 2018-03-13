'use strict';

import React from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';
import { getDL }          from '../../../../helpers/data/card-type';
import translations       from '../../../../i18n'
import { convertToHtml }  from '../../../../i18n/convert-to-html.jsx';

const VeteransPreviousDesignation = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='veterans-previous-designation-form'>
      {convertToHtml('h2','Is "Veteran" printed on your commercial driver license?', 'question translation-missing')}
      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name='previouslyDesignated'
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;
