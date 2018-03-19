'use strict';

import React              from 'react';
import NumberInput        from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';
import Translator         from '../../i18n/translator-tag.jsx';
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
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'myBasics.heightWeightPage.height.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'myBasics.heightWeightPage.height.explanation'
        />

        <fieldset role='group' aria-label='Height'>
          <NumberInput
            {...props}
            identifier              = 'heightFeet'
            description             =  { <Translator tag = 'span' translationPath = 'myBasics.heightWeightPage.height.feetLabel' /> }
            value                   = { props.traitsHeightWeight.heightFeet }
            errorMessage            = { props.validations.heightFeet() }
            onChange                = { props.onChange }
            onBlurValidate          = { props.onBlurValidate }
            onFocusClearValidation  = { props.onFocusClearValidation }
          />

          <div className='unit spacer' />

          <NumberInput
            {...props}
            identifier              = 'heightInches'
            description             =  { <Translator tag = 'span' translationPath = 'myBasics.heightWeightPage.height.inchesLabel' /> }
            value                   = { props.traitsHeightWeight.heightInches }
            errorMessage            = { props.validations.heightInches() }
            onChange                = { props.onChange }
            onBlurValidate          = { props.onBlurValidate }
            onFocusClearValidation  = { props.onFocusClearValidation }
          />
        </fieldset>
        <div className='row'>
          <ErrorLabel
            errorMessage  = { errors.heightFeet || errors.heightInches }
            errorClass    = { addError }
          />
        </div>

        <hr />
        <Translator
          tag='h2'
          className='question'
          translationPath = 'myBasics.heightWeightPage.weight.prompt'
        />
        <Translator
          tag='p'
          translationPath = 'myBasics.heightWeightPage.weight.explanation'
        />

        <fieldset role='group' aria-label='weight'>
          <NumberInput
            {...props}
            identifier              = 'weight'
            description             = { <Translator tag = 'span' translationPath = 'myBasics.heightWeightPage.weight.poundsLabel' /> }
            value                   = { props.traitsHeightWeight.weight }
            errorMessage            = { props.validations.weight() }
            onChange                = { props.onChange }
            onBlurValidate          = { props.onBlurValidate }
            onFocusClearValidation  = { props.onFocusClearValidation }
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
