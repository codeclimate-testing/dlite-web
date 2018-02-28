'use strict';

import React                  from 'react';
import TextInput              from '../../text-input.jsx';
import Translate              from '../../../i18n/translate-tag.jsx';
import ExpirationDate         from '../../expiration-date.jsx';

const ExplanationString = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div>
      <Translate tag='h2' className='question'>
        Please tell us about your most recent driver license.
      </Translate>
      <Translate tag='p'>
        We’ll ask for a complete license history later in the application.
      </Translate>
    </div>
  )
};

export default ExplanationString;