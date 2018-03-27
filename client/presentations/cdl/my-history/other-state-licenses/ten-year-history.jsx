'use strict';

import React              from 'react';
import Page               from '../../../../containers/page.jsx';
import NavigationButtons  from '../../../navigation-buttons.jsx';
import Translator         from '../../../../i18n/translator-tag.jsx';
import RadioSelector      from '../../../radio-selector.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='ten-year-history'>
      <hr />

      <Translator
        tag             = 'p'
        translationPath = 'tenYearHistoryPage.fillOutHistoryVia.prompt'
      />

      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'tenYearHistoryPage.fillOutHistoryVia.explanation'
      />

      <div className='row inner-buttom'>
        <fieldset role='group' aria-label='How to fill out ten year history'>
          <RadioCollection
            {...props}
            name= 'tenYearHistory'
            errorMessage = {props.validations.tenYearHistory() }
            selectedValue = {props.otherStateLicenses.tenYearHistory}
          >
            <RadioSelector value='home'>
              <Translator tag = 'span' translationPath = 'tenYearHistoryPage.fillOutHistoryVia.answerPrint' />
            </RadioSelector>

            <RadioSelector value='field'>
              <Translator tag = 'span' translationPath = 'tenYearHistoryPage.fillOutHistoryVia.answerField' />
            </RadioSelector>

          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
