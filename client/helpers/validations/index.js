'use strict';

import formValidationGenerator  from './form-validator';

import namePageRules            from './name-page-rules';
import dobPageRules             from './dob-page-rules';
import wdywtdtRules             from './wdywtdt-rules';
import seniorIDRules            from './seniorID-rules';

export const NamePageValidator  = formValidationGenerator(namePageRules);
export const DOBValidator       = formValidationGenerator(dobPageRules);
export const WDYWTDTValidator   = formValidationGenerator(wdywtdtRules);
export const SeniorIDValidator  = formValidationGenerator(seniorIDRules);