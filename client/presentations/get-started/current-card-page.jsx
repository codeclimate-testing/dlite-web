'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import EnterInfo          from './current-card-info/enter-info.jsx';
import translations       from '../../i18n';
import Translate          from '../../i18n/translate-tag.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>

        <form onSubmit={ props.onSubmit }>
          <EnterInfo
            {...props}
            showIf = {true}
            textDescription = {translations[locale].intro.currentCardPage.numberLabel}
          >
            <Translate tag='h2' className='question'>
              { translations[locale].intro.currentCardPage.prompt }
            </Translate>
            <Translate tag='p'>
              { translations[locale].intro.currentCardPage.explanation }
            </Translate>

          </EnterInfo>

          <NavigationButtons
            {...props}
            errorMessage = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
