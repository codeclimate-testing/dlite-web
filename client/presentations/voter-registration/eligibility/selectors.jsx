'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Selectors = (props) => {
  let locale = props.locale;
  return (
    <fieldset>
      <RadioCollection
        {...props}
        name='eligibilityRequirements'
      >
        <RadioSelector
          value='Yes'
          text={translations[locale].shared.commonAnswers.yes}
        />
        <RadioSelector
          value='No'
          text={translations[locale].shared.commonAnswers.no}
        />
        <RadioSelector
          value='decline'
          text={translations[locale].shared.commonAnswers.declineToAnswer}
        />
      </RadioCollection>
    </fieldset>
  );
}
export default Selectors;
