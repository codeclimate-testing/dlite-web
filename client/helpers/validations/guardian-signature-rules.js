'use strict';

import errorMessages        from '../../presentations/error-messages';
import selectionValidator   from './selection-validator';
import { dateValidator }    from './date-validator';
import { hasValue }         from '../data/validations';
import { englishValidator } from './english-validator';

const validateDate = (props, name, locale) => {
  let errors = selectionValidator('invalidOrMissingDate', name)(Object.assign(props, {locale}));
  if (!dateValidator(name, props)) {
    errors.push(errorMessages.invalidOrMissingDate)
  }
  return errors;
}

const validateHasValue = (value, errorType, locale) => {
  let errors = englishValidator(value, locale);
  if (!hasValue(value)) {
    errors.push(errorType);
  }
  return errors;
}

const isSigned = (props) => {
  let value = props.guardianSignature.isSigned;
  return validateHasValue(value, errorMessages.selectionMissing, props.locale);
};

const acceptLiabilities_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].acceptLiabilities;
  return validateHasValue(value, errorMessages.liabilityAcceptanceMissing, props.locale);
};

const name_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].signature.name;
  return validateHasValue(value, errorMessages.parentNameMissing, props.locale);
};

const month_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].signature, 'month', props.locale);
};

const day_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].signature, 'day', props.locale);
};

const year_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].signature, 'year', props.locale);
};

const phoneNumber_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].phoneNumber;
  return englishValidator(value, props.locale);
};

const guardian_0Street_1 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.street_1;
  return englishValidator(value, props.locale);
};

const guardian_0Street_2 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.street_2;
  return englishValidator(value, props.locale);
};

const guardian_0City = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.city;
  return englishValidator(value, props.locale);
};

const guardian_0Zip = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.zip;
  return englishValidator(value, props.locale);
};

const acceptLiabilities_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].acceptLiabilities;
  return validateHasValue(value, errorMessages.liabilityAcceptanceMissing, props.locale);
};

const name_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].signature.name;
  return validateHasValue(value, errorMessages.parentNameMissing, props.locale);
};

const month_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].signature, 'month', props.locale);
};

const day_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].signature, 'day', props.locale);
};

const year_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].signature, 'year', props.locale);
};

const phoneNumber_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].phoneNumber;
  return englishValidator(value, props.locale);
};

const guardian_1Street_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.street_1;
  return englishValidator(value, props.locale);
};

const guardian_1Street_2 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.street_2;
  return englishValidator(value, props.locale);
};

const guardian_1City = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.city;
  return englishValidator(value, props.locale);
};

const guardian_1Zip = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.zip;
  return englishValidator(value, props.locale);
};

const number_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].ID.number;
  return validateHasValue(value, errorMessages.identityDocumentationMissing, props.locale);
};

export default {
  isSigned,

  acceptLiabilities_0,
  name_0,
  month_0,
  day_0,
  year_0,
  phoneNumber_0,
  guardian_0Street_1,
  guardian_0Street_2,
  guardian_0City,
  guardian_0Zip,

  acceptLiabilities_1,
  name_1,
  month_1,
  day_1,
  year_1,
  phoneNumber_1,
  guardian_1Street_1,
  guardian_1Street_2,
  guardian_1City,
  guardian_1Zip
}
