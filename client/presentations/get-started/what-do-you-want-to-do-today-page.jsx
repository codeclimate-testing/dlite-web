'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import { convertToHtml }    from '../../i18n/convert-to-html.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        {convertToHtml('h2', translations.intro.wdywtdtPage.prompt, 'question')}
        {convertToHtml('p', translations.intro.wdywtdtPage.explanation)}
        <form onSubmit= { props.onSubmit }>
          <div className='row inner-buttom'>
            <fieldset>
              <RadioCollection
                {...props}
                name    = 'cardAction'
                onBlur  = { props.onBlurValidate }
                errorMessage = { props.validations.cardAction()}
              >
                <RadioSelector
                  value = 'new'
                  text={translations.intro.wdywtdtPage.values[0]}
                />
                <RadioSelector
                  value = 'renew'
                  text={translations.intro.wdywtdtPage.values[1]}
                />
                <RadioSelector
                  value = 'change'
                  text={translations.intro.wdywtdtPage.values[2]}
                />
                <RadioSelector
                  value='replace'
                  text={translations.intro.wdywtdtPage.values[3]}
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
