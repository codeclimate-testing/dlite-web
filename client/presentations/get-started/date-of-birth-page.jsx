'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import DateInput          from '../date-input.jsx';

const Presentation = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={ props.onSubmit } className='date-of-birth-form'>
        <h2 className='question'>What's your date of birth?</h2>
        <p>Example: 03 21 1967</p>

        <fieldset>
          <DateInput
            {...props}
            title       = 'Date of birth'
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
