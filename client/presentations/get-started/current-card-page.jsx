'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import TextInput          from '../text-input.jsx';
import ExpirationDate     from '../expiration-date.jsx';
import {
  getCorrectString
}   from '../../helpers/data/card-type';
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <form onSubmit={ props.onSubmit }>
          {convertToHtml('h2', translations.intro.currentCardPage.prompt, 'question')}
          {convertToHtml('p', translations.intro.currentCardPage.explanation)}
          <fieldset>
            <TextInput
              {...props}
              identifier    = 'number'
              description   = { translations.intro.currentCardPage.numberLabel }
              value         = { props.currentCardInfo.number }
              errorMessage  = { props.currentCardValidation.number() }
            />

          <ExpirationDate
            {...props}
            values      = { props.currentCardInfo }
            validations = { props.currentCardValidation }
          />
        </fieldset>

        <NavigationButtons
          {...props}
          errorMessage = { props.currentCardValidation.all() }
        />
        </form>
      </div>
    </Page>
  )
};

export default Form;
