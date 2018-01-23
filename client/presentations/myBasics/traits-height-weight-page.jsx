'use strict';

import React              from 'react';
import NumberInput        from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from '../validations.jsx';

const TraitsPage = (props) => {
  let errors = {
    heightFeet:   props.validations.heightFeet(),
    heightInches: props.validations.heightInches(),
    weight:       props.validations.weight()
  };
  let message = errorMessage(errors);
  let addError = errorClass(message);

  return (
    <Page
      {...props}
      sectionKey='myBasics'
    >
      <form onSubmit={ props.onSubmit } className='traits-height-weight-form' >
        <h2 className='question'>How tall are you?</h2>
        <p>Example: 5 feet 9 inches</p>

          <div className='row'>
            <NumberInput
              {...props}
              identifier='heightFeet'
              description='Feet'
              value={ props.traitsHeightWeight.heightFeet }
              errorMessage={ props.validations.heightFeet() }
              onChange      = { props.onChange }
              onBlurValidate = { props.onBlurValidate }
              onFocusClearValidation = { props.onFocusClearValidation }
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier='heightInches'
              description='Inches'
              value={ props.traitsHeightWeight.heightInches }
              errorMessage={ props.validations.heightInches() }
              onChange      = { props.onChange }
              onBlurValidate = { props.onBlurValidate }
              onFocusClearValidation = { props.onFocusClearValidation }
            />
          </div>
            <ErrorLabel
              errorMessage  = { errors.heightFeet || errors.heightInches }
              errorClass    = { addError }
            />

        <hr/>
        <h2 className='question'>And how much do you weigh?</h2>
        <p>Example: 190 pounds</p>

          <div className='row'>
            <NumberInput
              {...props}
              identifier='weight'
              description='Pounds'
              value={ props.traitsHeightWeight.weight }
              errorMessage={ props.validations.weight() }
              onChange      = { props.onChange }
              onBlurValidate = { props.onBlurValidate }
              onFocusClearValidation = { props.onFocusClearValidation }
            />
          </div>
            <ErrorLabel
              errorMessage  = { errors.weight }
              errorClass    = { addError }
            />

          <NavigationButtons
            {...props}
            errorMessage={props.validations.all()}
          />
        </form>
    </Page>
  );
};

export default TraitsPage;
