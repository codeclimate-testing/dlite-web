'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const VeteransBenefits = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='veterans-benefits-form'>
      <MessageBox className='thanks'>
        <div className='veteran-thank-you-message'>
          <Translation tag='p'>
            {translations[locale].myHistory.veteransPage.messageYes}
          </Translation>
        </div>
      </MessageBox>

      <hr />

      <Translation tag='h2' className='question'>
        {translations[locale].myHistory.veteransPage.benefitsPrompt}
      </Translation>


      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name='receiveBenefits'
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransBenefits;
