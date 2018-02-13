'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import DateInput          from '../date-input.jsx';
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

const Presentation = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={ props.onSubmit } className='date-of-birth-form'>
        {convertToHtml('h2', translations.intro.dateOfBirthPage.prompt, 'question')}
        {convertToHtml('p', translations.intro.dateOfBirthPage.explanation)}

        <fieldset>
          <DateInput
            {...props}
            title       = { translations.shared.labels.dateOfBirth }
            values      = { props.dateOfBirth }
          />
        </fieldset>


        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  );
};

export default Presentation;
