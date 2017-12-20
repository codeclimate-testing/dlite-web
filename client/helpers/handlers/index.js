'use strict';

import navigateOnBack from './navigate-on-back';
import navigateOnSubmit from './navigate-on-submit';

import {
  onBlurGenerator,
  onFocusGenerator
} from './on-focus-change';
const onBlur = onBlurGenerator;
const onFocus = onFocusGenerator;

import onFormSubmit from './on-form-submit';
import onInputChange from './on-input-change';
import onPageLoad from './on-page-load';

export default {
  navigateOnBack,
  navigateOnSubmit,
  onFocus,
  onBlur,
  onFormSubmit,
  onInputChange,
  onPageLoad
};
