'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const VeteransBenefits = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='veterans-benefits-form'>
      <MessageBox className='thanks'>
        <div className='veteran-thank-you-message'>
          <Translator
            tag             = 'p'
            translationPath = 'myHistory.veteransPage.messageYes'
          />
        </div>
      </MessageBox>

      <hr />

      <Translator
        tag               = 'h2'
        className         = 'question'
        translationPath   = 'myHistory.veteransPage.benefitsPrompt'
        tabIndex          = '0'
      />

      <div className='input-container'>
        <fieldset role='group' aria-label='Veterans benefits choice'>
          <RadioCollection
            {...props}
            name='receiveBenefits'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransBenefits;
