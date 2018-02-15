'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import { convertToHtml }    from '../../i18n/convert-to-html.jsx';
import { ifAddLicense }     from '../../helpers/data/pathnames';

const tempObjectThatNeedsTranslations = {
  prePrompt: translations.intro.wdywtdtPage.prePrompt,
  prompt: translations.intro.wdywtdtPage.prompt,
  explanation: '',
  values: [
    "Get a driver license for the first time",
    "Renew your driver license",
    "Correct or update your driver license",
    "Replace your driver license"
  ]
};

const Form = (props) => {
  let text = ifAddLicense(props.addApp, translations.intro.wdywtdtPage, tempObjectThatNeedsTranslations);

  // this is temporary as we go through the stories to add all options in for the ID
  let hideSomeButtons = props.location.pathname.startsWith('/add/id-card');

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        {convertToHtml('h2', text.prompt, 'question')}
        {convertToHtml('p', text.explanation)}
        <form onSubmit= { props.onSubmit }>
          <div className='row inner-buttom'>
            <fieldset>
              <RadioCollection
                {...props}
                name    = { ifAddLicense(props.addApp, 'cardAction', 'DLAction')}
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
                  value = 'change'
                  text={text.values[2]}
                />
                <RadioSelector
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
