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
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

const translationPath = translations.myBasics.heightWeightPage;

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
        {convertToHtml('h2', translationPath.height.prompt, 'question')}
        {convertToHtml('p', translationPath.height.explanation)}

        <fieldset>
          <NumberInput
            {...props}
            identifier='heightFeet'
            description={translationPath.height.feetLabel}
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
            description={translationPath.height.inchesLabel}
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
        {convertToHtml('h2', translationPath.weight.prompt, 'question')}
        {convertToHtml('p', translationPath.weight.explanation)}

        <fieldset>
          <NumberInput
            {...props}
            identifier='weight'
            description={translationPath.weight.poundsLabel}
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
