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
import translations       from '../../i18n';

let translationsPath = translations.myBasics.heightWeightPage;

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
        <h2 className='question'>{translationsPath.height.prompt}</h2>
        <p>{translationsPath.height.explanation}</p>

        <fieldset>
          <NumberInput
            {...props}
            identifier='heightFeet'
            description={translationsPath.height.feetLabel}
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
            description={translationsPath.height.inchesLabel}
            value={ props.traitsHeightWeight.heightInches }
            errorMessage={ props.validations.heightInches() }
            onChange      = { props.onChange }
            onBlurValidate = { props.onBlurValidate }
            onFocusClearValidation = { props.onFocusClearValidation }
          />
        </fieldset>
        <div className='row'>
          <ErrorLabel
            errorMessage  = { errors.heightFeet || errors.heightInches }
            errorClass    = { addError }
          />
        </div>

        <hr />
        <h2 className='question'>{translationsPath.weight.prompt}</h2>
        <p>{translationsPath.weight.explanation}</p>

        <fieldset>
          <NumberInput
            {...props}
            identifier='weight'
            description={translationsPath.weight.poundsLabel}
            value={ props.traitsHeightWeight.weight }
            errorMessage={ props.validations.weight() }
            onChange      = { props.onChange }
            onBlurValidate = { props.onBlurValidate }
            onFocusClearValidation = { props.onFocusClearValidation }
          />
        </fieldset>
        <div className='row'>
          <ErrorLabel
            errorMessage  = { errors.weight }
            errorClass    = { addError }
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

export default TraitsPage;
