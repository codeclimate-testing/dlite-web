'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import NumberInput        from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import DateInput          from '../date-input.jsx';

const Presentation = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={ props.onSubmit } className='date-of-birth-form'>
        <h2 className='question pad-bottom-10'>What's your date of birth?</h2>
        <p className='pad-bottom-20'>Example: 03 21 1967</p>

        <div className='row inner-bottom'>
          <DateInput
            {...props}
            onBlur      = { props.onBlurValidate }
            onFocus     = { props.onFocusClearValidation }
            description = 'Date of birth'
            values      = { props.dateOfBirth }
            validations = { props.validations }
          />

        </div>

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  );
};

export default Presentation;
