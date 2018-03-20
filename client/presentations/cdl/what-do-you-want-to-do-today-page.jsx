'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import Translator           from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  let locale = props.locale;

  const tempObjectThatNeedsTranslations = {
    values: [
      translations[locale].cdl.wdywtdtPage.values[0],
      translations[locale].cdl.wdywtdtPage.values[1],
      translations[locale].cdl.wdywtdtPage.values[2],
      translations[locale].cdl.wdywtdtPage.values[3]
    ]
  };
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.wdywtdtPage.prompt'
        />
        <form onSubmit= { props.onSubmit }>
          <div className='row inner-button'>
            <fieldset role='group' aria-label='What do you want to do?'>
              <RadioCollection
                {...props}
                name              = "cdlWDYWTDT "
                onBlur            = { props.onBlurValidate }
                selectedValue     = { props.cardAction }
                errorMessage      = { props.validations.cardAction()}
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
