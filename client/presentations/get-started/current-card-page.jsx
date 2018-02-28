'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import TextInput          from '../text-input.jsx';
import ExpirationDate     from '../expiration-date.jsx';
import translations       from '../../i18n';
import Translate          from '../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <form onSubmit={ props.onSubmit }>
          <Translate tag='h2' className='question'>
            { translations[locale].intro.currentCardPage.prompt }
          </Translate>
          <Translate tag='p'>
            { translations[locale].intro.currentCardPage.explanation }
          </Translate>
          <fieldset>
            <TextInput
              {...props}
              identifier    = 'number'
              description   = { translations[locale].intro.currentCardPage.numberLabel }
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
