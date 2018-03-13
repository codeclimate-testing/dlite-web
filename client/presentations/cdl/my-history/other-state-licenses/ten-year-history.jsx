'use strict';

import React              from 'react';
import Page               from '../../../../containers/page.jsx';
import NavigationButtons  from '../../../navigation-buttons.jsx';
import translations       from '../../../../i18n';
import { convertToHtml }  from '../../../../i18n/convert-to-html.jsx';
import RadioSelector      from '../../../radio-selector.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='ten-year-history'>
      <hr />
      {convertToHtml('p', translations[locale].tenYearHistoryPage.fillOutHistoryVia.prompt)}
      {convertToHtml('h2', translations[locale].tenYearHistoryPage.fillOutHistoryVia.explanation, 'question')}
      <div className='row inner-buttom'>
        <fieldset>
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
