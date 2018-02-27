'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import { convertToHtml }    from '../../i18n/convert-to-html.jsx';

const tempObjectThatNeedsTranslations = {
  values: [
    "Get a California CDL for the first time",
    "Renew my CDL",
    "Correct or update my CDL",
    "Replace my CDL"
  ]
};

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        {convertToHtml('h2', translations.intro.wdywtdtPage.prompt, 'question')}
        <form onSubmit= { props.onSubmit }>
          <div className='row inner-buttom'>
            <fieldset>
              <RadioCollection
                {...props}
                name = "cdlWDYWTDT "
                onBlur  = { props.onBlurValidate }
                errorMessage = { props.validations.cardAction()}
              >
                <RadioSelector
                  value = 'new'
                  text={tempObjectThatNeedsTranslations.values[0]}
                  className='long-text'
                />
                <RadioSelector
                  value = 'renew'
                  text={tempObjectThatNeedsTranslations.values[1]}
                  className='long-text'
                />
                <RadioSelector
                  value = 'change'
                  text={tempObjectThatNeedsTranslations.values[2]}
                  className='long-text'
                />
                <RadioSelector
                  value='replace'
                  text={tempObjectThatNeedsTranslations.values[3]}
                  className='long-text'
                />
              </RadioCollection>
            </fieldset>
          </div>
          <NavigationButtons
            errorMessage= { props.validations.cardAction() }
            { ...props }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
