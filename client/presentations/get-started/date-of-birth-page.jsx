'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import DateInput          from '../date-input.jsx';
import translations       from '../../i18n';
import Translation        from '../../i18n/translate-tag.jsx';
import CDLUnder21         from '../cdl/dob-under21.jsx';

const Presentation = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={ props.onSubmit } className='date-of-birth-form'>
        <Translation tag='h2' className='question'>
          {translations[locale].intro.dateOfBirthPage.prompt}
        </Translation>
        <Translation tag='p'>
          {translations[locale].intro.dateOfBirthPage.explanation}
        </Translation>

        <fieldset>
          <DateInput
            {...props}
            title       = { translations[locale].shared.labels.dateOfBirth }
            values      = { props.dateOfBirth }
          />
        </fieldset>

        <CDLUnder21   {...props} />

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  );
};

export default Presentation;
