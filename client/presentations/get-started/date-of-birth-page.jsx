'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import DateInput          from '../date-input.jsx';
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';
import CDLUnder21         from '../cdl/dob-under21.jsx';

const Presentation = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={ props.onSubmit } className='date-of-birth-form'>
        {convertToHtml('h2', translations[locale].intro.dateOfBirthPage.prompt, 'question')}
        {convertToHtml('p', translations[locale].intro.dateOfBirthPage.explanation)}

        <fieldset>
          <DateInput
            {...props}
            title       = { translations[locale].shared.labels.dateOfBirth }
            values      = { props.dateOfBirth }
          />
        </fieldset>

        <CDLUnder21   dateOfBirth = {props.dateOfBirth } />

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  );
};

export default Presentation;
