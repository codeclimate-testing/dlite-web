
'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-replacement-detail'>
        {convertToHtml('h2', translations[locale].intro.replacementReasonPage.prompt, 'question')}
        {convertToHtml('p', translations[locale].intro.replacementReasonPage.explanation)}
        <form onSubmit={ props.onSubmit }>
          <div className='row inner-buttom'>
            <fieldset>
              <RadioCollection
                {...props}
                name= 'reason'
                errorMessage = {props.validations.reason() }
                selectedValue = {props.cardReplacement.reason}
              >
                <RadioSelector
                  value='lostOrStolen'
                  text={translations[locale].intro.replacementReasonPage.values[0]}
                />
                <RadioSelector
                  value='damaged'
                  text={translations[locale].intro.replacementReasonPage.values[1]}
                />
                <RadioSelector
                  value='other'
                  text={translations[locale].intro.replacementReasonPage.values[2]}
                />
              </RadioCollection>
            </fieldset>
          </div>
          <NavigationButtons
            errorMessage = { props.validations.reason() }
            {...props}
          />
        </form>
      </div>
    </Page>
  );
};

export default Form;
