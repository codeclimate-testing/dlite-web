'use strict';

import errorMessages      from '../../presentations/error-messages';
import selectionValidator from './selection-validator';
import { dateValidator }  from './date-validator';
import { hasValue }       from '../data/validations';

import {
  englishValidatorGenerator,
  englishValidator
} from './english-validator';

const validateDate = (props, name) => {
  let errors = selectionValidator('invalidOrMissingDate', name)(props);
  if (!dateValidator(name, props)) {
    errors.push(errorMessages.invalidOrMissingDate)
  }
  return errors;
}

const validateHasValue = (value, errorType) => {
  let errors = englishValidator(value);
  if (!hasValue(value)) {
    errors.push(errorType);
  }
  return errors;
}

const isSigned = (props) => {
  let value = props.guardianSignature.isSigned;
  return validateHasValue(value, errorMessages.selectionMissing);
};

const acceptLiabilities_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].acceptLiabilities;
  return validateHasValue(value, errorMessages.liabilityAcceptanceMissing);
};

const name_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].signature.name;
  return validateHasValue(value, errorMessages.parentNameMissing);
};

const month_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].signature, 'month');
};

const day_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].signature, 'day');
};

const year_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].signature, 'year');
};

const phoneNumber_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].phoneNumber;
  return englishValidator(value);
};

const guardian_0Street_1 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.street_1;
  return englishValidator(value);
};

const guardian_0Street_2 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.street_2;
  return englishValidator(value);
};

const guardian_0City = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.city;
  return englishValidator(value);
};

const guardian_0Zip = (props) => {
  let value = props.guardianSignature.guardianInfo[0].address.zip;
  return englishValidator(value);
};

const number_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].ID.number;
  return validateHasValue(value, errorMessages.identityDocumentationMissing);
};

const issuedBy_0 = (props) => {
  let value = props.guardianSignature.guardianInfo[0].ID.issuedBy;
  return validateHasValue(value, errorMessages.pleaseEnterValidData);
};

const expirationMonth_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].ID, 'expirationMonth');
};

const expirationDay_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].ID, 'expirationDay');
};

const expirationYear_0 = (props) => {
  return validateDate(props.guardianSignature.guardianInfo[0].ID, 'expirationYear');
};

const acceptLiabilities_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].acceptLiabilities;
  return validateHasValue(value, errorMessages.liabilityAcceptanceMissing);
};

const name_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].signature.name;
  return validateHasValue(value, errorMessages.parentNameMissing);
};

const month_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].signature, 'month');
};

const day_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].signature, 'day');
};

const year_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].signature, 'year');
};

const phoneNumber_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].phoneNumber;
  return englishValidator(value);
};

const guardian_1Street_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.street_1;
  return englishValidator(value);
};

const guardian_1Street_2 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.street_2;
  return englishValidator(value);
};

const guardian_1City = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.city;
  return englishValidator(value);
};

const guardian_1Zip = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].address.zip;
  return englishValidator(value);
};

const number_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].ID.number;
  return validateHasValue(value, errorMessages.identityDocumentationMissing);
};

const issuedBy_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  let value = props.guardianSignature.guardianInfo[1].ID.issuedBy;
  return validateHasValue(value, errorMessages.pleaseEnterValidData);
};

const expirationMonth_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].ID, 'expirationMonth');
};

const expirationDay_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].ID, 'expirationDay');
};

const expirationYear_1 = (props) => {
  if(!props.accordions.includes('guardian-signature-add')) { return []; }
  return validateDate(props.guardianSignature.guardianInfo[1].ID, 'expirationYear');
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
  number_0,
  issuedBy_0,
  expirationMonth_0,
  expirationDay_0,
  expirationYear_0,

  acceptLiabilities_1,
  name_1,
  month_1,
  day_1,
  year_1,
  phoneNumber_1,
  guardian_1Street_1,
  guardian_1Street_2,
  guardian_1City,
  guardian_1Zip,
  number_1,
  issuedBy_1,
  expirationMonth_1,
  expirationDay_1,
  expirationYear_1
}
