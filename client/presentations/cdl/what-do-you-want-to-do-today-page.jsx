'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import Translator           from '../../i18n/translator-tag.jsx';

const Form = (props) => {
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
                <RadioSelector value = 'new' className='long-text'>
                  <Translator tag = 'span' translationPath = 'cdl.wdywtdtPage.values.0' />
                </RadioSelector>

                <RadioSelector value = 'renew' className='long-text'>
                  <Translator tag = 'span' translationPath = 'cdl.wdywtdtPage.values.1' />
                </RadioSelector>

                <RadioSelector value = 'change' className='long-text'>
                  <Translator tag = 'span' translationPath = 'cdl.wdywtdtPage.values.2' />
                </RadioSelector>

                <RadioSelector value='replace' className='long-text'>
                  <Translator tag = 'span' translationPath = 'cdl.wdywtdtPage.values.3' />
                </RadioSelector>

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
