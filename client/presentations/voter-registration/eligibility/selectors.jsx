'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Selectors = (props) => {
  return (
    <fieldset>
      <RadioCollection
        {...props}
        name='eligibilityRequirements'
      >
        <RadioSelector
          value='Yes'
          text={translations.shared.commonAnswers.yes}
        />
        <RadioSelector
          value='No'
          text={translations.shared.commonAnswers.no}
        />
        <RadioSelector
          value='decline'
          text={translations.shared.commonAnswers.declineToAnswer}
        />
      </RadioCollection>
    </fieldset>
  );
}
export default Selectors;
