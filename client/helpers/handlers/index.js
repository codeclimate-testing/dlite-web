'use strict';

import navigateOnBack   from './navigate-on-back';
import navigateOnSubmit from './navigate-on-submit';

import {
  onBlurGenerator,
  onFocusGenerator
} from './on-focus-change';
const onBlur = onBlurGenerator;
const onFocus = onFocusGenerator;

import {
  onBlurValidateGenerator,
  onFocusClearValidationGenerator
} from './on-validation-change';
const onBlurValidate = onBlurValidateGenerator;
const onFocusClearValidation = onFocusClearValidationGenerator;

import onFormSubmit         from './on-form-submit-generator';
import navigateOrShowErrors from './navigate-or-show-errors';
import onSubmitShowErrors   from './on-submit-show-errors';
import onInputChange        from './on-input-change';
import onSelectChange       from './on-select-change';
import onPageLoad           from './on-page-load';
import onFlowChange         from './on-flow-change';
import onIntervalSave       from './on-interval-save';

export default {
  navigateOnBack,
  navigateOnSubmit,
  onFocus,
  onBlur,
  onFormSubmit,
  onInputChange,
  onSelectChange,
  onPageLoad,
  onBlurValidate,
  onFocusClearValidation,
  onSubmitShowErrors,
  onFlowChange,
  onIntervalSave,
  navigateOrShowErrors
};
