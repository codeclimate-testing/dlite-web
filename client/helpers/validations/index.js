'use strict';

import formValidationGenerator  from './form-validator';

import namePageRules            from './name-page-rules';
import dobPageRules             from './dob-page-rules';
import wdywtdtRules             from './wdywtdt-rules';
import youthDLRules             from './youthDL-rules';
import seniorIDRules            from './seniorID-rules';
import cardTypeRules            from './card-type-rules';
import currentCardRules         from './current-card-rules';
import replaceRules             from './replace-rules';
import realIDRules              from './realID-rules';
import changeRules              from './change-rules';

export const NamePageValidator    = formValidationGenerator(namePageRules);
export const DOBValidator         = formValidationGenerator(dobPageRules);
export const WDYWTDTValidator     = formValidationGenerator(wdywtdtRules);
export const YouthDLValidator     = formValidationGenerator(youthDLRules);
export const SeniorIDValidator    = formValidationGenerator(seniorIDRules);
export const CardTypeValidator    = formValidationGenerator(cardTypeRules);
export const CurrentCardValidator = formValidationGenerator(currentCardRules);
export const ReplaceValidator     = formValidationGenerator(replaceRules);
export const RealIDValidator      = formValidationGenerator(realIDRules);
export const ChangeValidator      = formValidationGenerator(changeRules);
