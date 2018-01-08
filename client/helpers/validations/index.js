'use strict';

import formValidationGenerator  from './form-validator';

import namePageRules            from './name-page-rules';
import dobPageRules             from './dob-page-rules';

export const NamePageValidator  = formValidationGenerator(namePageRules);
export const DOBValidator       = formValidationGenerator(dobPageRules);
