'use strict';

import React from 'react';

import RadioCollection    from '../radio-selector-collection.jsx';
import radioYesNoGroup    from '../radio-yes-no-group.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';
import translations       from '../../i18n';
import Translation        from '../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit} className='senior-id-form'>
        <Translation tag='h2' className='question'>
          {translations[locale].intro.seniorIdPage.prompt}
        </Translation>
        <Translation tag='p'>
          {translations[locale].intro.seniorIdPage.explanation}
        </Translation>

        <hr />

        <div className='row'>
          <fieldset>
            <RadioCollection
              {...props}
              name = 'seniorID'
              onBlur = { props.onBlurValidate }
              errorMessage = {props.validations.seniorID() }
            >
              { radioYesNoGroup(locale) }
            </RadioCollection>
          </fieldset>
        </div>

        <NavigationButtons
          errorMessage = {props.validations.seniorID() }
          {...props}
        />
      </form>
    </Page>
  )
};

export default Form;
