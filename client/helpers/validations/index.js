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
import reducedFeeRules          from './reduced-fee-rules';
import physicalTraitsRules      from './physical-traits-rules';
import heightWeightRules        from './height-weight-rules';
import licenseTypeRules         from './license-type-rules';
import medicalRules             from './medical-rules';
import licenseHistoryRules      from './license-history-rules';
import namesHistoryRules        from './names-history-rules';
import licenseIssuesRules       from './license-issues-rules';
import organDonationRules       from './organ-donation-rules';

export const NamePageValidator        = formValidationGenerator(namePageRules);
export const DOBValidator             = formValidationGenerator(dobPageRules);
export const WDYWTDTValidator         = formValidationGenerator(wdywtdtRules);
export const YouthDLValidator         = formValidationGenerator(youthDLRules);
export const SeniorIDValidator        = formValidationGenerator(seniorIDRules);
export const CardTypeValidator        = formValidationGenerator(cardTypeRules);
export const CurrentCardValidator     = formValidationGenerator(currentCardRules);
export const ReplaceValidator         = formValidationGenerator(replaceRules);
export const RealIDValidator          = formValidationGenerator(realIDRules);
export const ChangeValidator          = formValidationGenerator(changeRules);
export const ReducedFeeValidator      = formValidationGenerator(reducedFeeRules);
export const PhysicalTraitsValidator  = formValidationGenerator(physicalTraitsRules);
export const HeightWeightValidator    = formValidationGenerator(heightWeightRules);
export const LicenseTypeValidator     = formValidationGenerator(licenseTypeRules);
export const MedicalValidator         = formValidationGenerator(medicalRules);
export const LicenseIssuesValidator   = formValidationGenerator(licenseIssuesRules);
export const NamesValidator           = formValidationGenerator(namesHistoryRules);
export const LicenseHistoryValidator  = formValidationGenerator(licenseHistoryRules);
export const OrganDonationValidator   = formValidationGenerator(organDonationRules);

