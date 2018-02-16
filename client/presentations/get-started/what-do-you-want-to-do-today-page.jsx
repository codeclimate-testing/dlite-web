'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import { convertToHtml }    from '../../i18n/convert-to-html.jsx';
import {
  getTextFromPathname,
  onIDFlow
}  from '../../helpers/data/pathnames';

const tempObjectThatNeedsTranslations = {
  explanation: '',
  values: [
    "Get a driver license for the first time",
    "Renew your driver license",
    "Correct or update your driver license",
    "Replace your driver license"
  ]
};

const anotherTempObjectThatNeedsTranslation = {
  explanation: '',
  values: [
    'Get an ID card for the first time',
    'Renew your ID card',
    'Correct or update your ID card',
    'Replace your ID card'
  ]
};

const Form = (props) => {
  let text = getTextFromPathname(props, translations.intro.wdywtdtPage, tempObjectThatNeedsTranslations, anotherTempObjectThatNeedsTranslation);

  // this is temporary as we go through the stories to add all options in for the ID
  let hideSomeButtons = onIDFlow(props);

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        {convertToHtml('h2', translations.intro.wdywtdtPage.prompt, 'question')}
        {convertToHtml('p', text.explanation)}
        <form onSubmit= { props.onSubmit }>
          <div className='row inner-buttom'>
            <fieldset>
              <RadioCollection
                {...props}
                name    = {getTextFromPathname(props, 'cardAction', 'DLAction', 'IDAction')}
                onBlur  = { props.onBlurValidate }
                errorMessage = { props.validations.cardAction()}
              >
                <RadioSelector
                  value = 'new'
                  text={text.values[0]}
                />
                <RadioSelector
                  value = 'renew'
                  text={text.values[1]}
                />
                <RadioSelector
                  hide = {hideSomeButtons}
                  value = 'change'
                  text={text.values[2]}
                />
                <RadioSelector
                  hide = {hideSomeButtons}
                  value='replace'
                  text={text.values[3]}
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
