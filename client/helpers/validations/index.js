'use strict';

import formValidationGenerator  from './form-validator';

import namePageRules            from './name-page-rules';

export const NamePageValidator  = formValidationGenerator(namePageRules);
