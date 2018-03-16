'use strict';

import React from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import { getDL }          from '../../../helpers/data/card-type';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const VeteransPreviousDesignation = (props) => {
  let locale = props.locale;
  const headerDL = <Translation tag='h2' className='question'>
    {translations[locale].myHistory.veteransPage.existingDesignation.promptLicense}
  </Translation>

  const headerID = <Translation tag='h2' className='question'>
    {translations[locale].myHistory.veteransPage.existingDesignation.promptID}
  </Translation>

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
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;
