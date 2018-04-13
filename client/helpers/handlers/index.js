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
} from './on-validation-change';
const onBlurValidate = onBlurValidateGenerator;

import onFormSubmit               from './on-form-submit-generator';
import navigateOrShowErrors       from './navigate-or-show-errors';
import onSubmitShowErrors         from './on-submit-show-errors';
import onInputChange              from './on-input-change';
import onSelectChange             from './on-select-change';
import onPageLoad                 from './on-page-load';
import onFlowChange               from './on-flow-change';
import onEmojiDebug               from './on-emoji-debug';
import onLoggedIn                 from './on-logged-in';
import newFlow                    from './new-flow';
import saveLanguage               from './save-language';
import saveAppType                from './save-app-type';

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
  onSubmitShowErrors,
  onFlowChange,
  navigateOrShowErrors,
  onEmojiDebug,
  onLoggedIn,
  newFlow,
  saveLanguage,
  saveAppType
};
