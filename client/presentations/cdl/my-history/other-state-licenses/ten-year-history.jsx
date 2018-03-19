'use strict';

import React              from 'react';
import Page               from '../../../../containers/page.jsx';
import NavigationButtons  from '../../../navigation-buttons.jsx';
import translations       from '../../../../i18n';
import Translation        from '../../../../i18n/translate-tag.jsx';
import RadioSelector      from '../../../radio-selector.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='ten-year-history'>
      <hr />
      <Translation tag='p'>
        {translations[locale].tenYearHistoryPage.fillOutHistoryVia.prompt}
      </Translation>
      <Translation tag='h2' className='question'>
        {translations[locale].tenYearHistoryPage.fillOutHistoryVia.explanation}
      </Translation>
      <div className='row inner-buttom'>
        <fieldset role='group' aria-label='How to fill out ten year history'>
          <RadioCollection
            {...props}
            name= 'tenYearHistory'
            errorMessage = {props.validations.tenYearHistory() }
            selectedValue = {props.otherStateLicenses.tenYearHistory}
          >
            <RadioSelector
              value='home'
              text={translations[locale].tenYearHistoryPage.fillOutHistoryVia.answerPrint}
            />
            <RadioSelector
              value='field'
              text={translations[locale].tenYearHistoryPage.fillOutHistoryVia.answerField}
            />
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
