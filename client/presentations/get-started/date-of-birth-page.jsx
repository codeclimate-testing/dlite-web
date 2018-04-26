'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import DateInput          from '../date-input.jsx';
import Translator         from '../../i18n/translator-tag.jsx';
import CDLUnder21         from '../cdl/dob-under21.jsx';
import CDLUnder18         from '../cdl/dob-under18.jsx';

const Presentation = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={ props.onSubmit } className='date-of-birth-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.dateOfBirthPage.prompt'
          tabIndex        = '0'
        />
        <Translator
          tag             = 'p'
          translationPath = 'intro.dateOfBirthPage.explanation'
        />

        <fieldset role='group' aria-label='Date of birth'>
          <DateInput
            {...props}
            values      = { props.dateOfBirth }
          >
            <Translator tag = 'span' translationPath = 'shared.labels.dateOfBirth' />
          </DateInput>
        </fieldset>

        <CDLUnder18   {...props} />

        <CDLUnder21   {...props} />

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
          continueHidden = { CDLUnder18(props) }
        />
      </form>
    </Page>
  );
};

export default Presentation;
