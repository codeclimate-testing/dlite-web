'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import {
  RadioSelectorYesTranslation,
  RadioSelectorNoTranslation,
  RadioSelectorDeclineTranslation
} from '../../shared/translations-radio-selector.jsx';

const Selectors = (props) => {
  return (
    <fieldset role='group' aria-label='Eligibility'>
      <RadioCollection
        {...props}
        name='eligibilityRequirements'
      >
        <RadioSelector
          value='Yes'
          text={<RadioSelectorYesTranslation />}
        />
        <RadioSelector
          value='No'
          text={<RadioSelectorNoTranslation />}
        />
        <RadioSelector
          value='decline'
          text={<RadioSelectorDeclineTranslation />}
        />
      </RadioCollection>
    </fieldset>
  );
}
export default Selectors;
