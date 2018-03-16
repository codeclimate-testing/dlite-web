'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import Translation          from '../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;

  const tempObjectThatNeedsTranslations = {
    values: [
      "Get a California CDL for the first time",
      "Renew my CDL",
      "Correct or update my CDL",
      "Replace my CDL"
    ]
  };
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        <Translation tag='h2' className='question'>
          {translations[locale].intro.wdywtdtPage.prompt}
        </Translation>
        <form onSubmit= { props.onSubmit }>
          <div className='row inner-button'>
            <fieldset>
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
