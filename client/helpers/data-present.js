'use strict';

const value = (props) => {
  return !!(props && props.trim());
};

const hasAllAttributes = (props, attributes) => {
  if (!props) { return; }

  return attributes.every((attributeName) => {
    return value(props[attributeName]);
  });
};

const hasAnyAttributes = (props, attributes) => {
  if (!props) { return; }

  return attributes.some((attributeName) => {
    return value(props[attributeName]);
  });
};

const legalName = (props) => {
  return hasAllAttributes(props, ['lastName']);
};

const date = (props) => {
  return hasAllAttributes(props, ['month', 'day', 'year']);
};

const cardType = (props) => {
  return (props && (props.driverLicense === true || props.ID === true))
};

const address = (props) => {
  return hasAnyAttributes(props, ['street_1', 'street_2', 'city', 'zip', 'homeAddressSameAsMailing'])
};

const homeAddressSameAsMailing = (props) => {
  return hasAllAttributes(props, ['homeAddressSameAsMailing'])
};

const traitsHeightWeight = (props) => {
  return hasAllAttributes(props, ['weight', 'heightFeet']);
};

const organDonation = (props) => {
  return hasAllAttributes(props, ['donate', 'contribute'])
};

const socialSecurity = (props) => {
  return hasAllAttributes(props, ['part1', 'part2', 'part3'])
};

const veteransService = (props) => {
  return (props && (props.isVeteran === 'No' || hasAllAttributes(props, ['isVeteran', 'receiveBenefits', 'veteransIdentifier'])))
};

const licenseIssues = (props) => {
  return date(props) || hasAnyAttributes(props, ['reason', 'isSuspended']);
};

const licenseAndIdHistory = (props) => {
  return date(props) || hasAnyAttributes(props, ['DLIDNumber', 'issuedBy', 'isIssued']);
};

const namesHistory = (props) => {
  return hasAllAttributes(props, ['hasUsedPreviousNames', 'previousNames']);
};

const hasPreviousNames = (props) => {
  return hasAllAttributes(props, ['hasUsedPreviousNames'])
};

const medicalHistory = (props) => {
  return hasAllAttributes(props, ['hasMedicalCondition', 'medicalInfo']);
};

const hasMedicalCondition = (props) => {
  return hasAllAttributes(props, ['hasMedicalCondition'])
};

const contactMethods = (props) => {
  return value(props.shouldContact) &&
    hasAnyAttributes(props, ['emailAddress', 'phoneNumber']);
};

const politicalPartyChoose = (props) => {
    return props && (
    value(props.politicalPartyChoose) && value(props.isSelected)
  );
};

const physicalTraits = (props) => {
  return hasAllAttributes(props, ['sex', 'eyeColor', 'hairColor']);
};

const realID = (props) => {
  return hasAnyAttributes(props, ['getRealID']);
};

const application = (props) => {
  return legalName(props.legalName) ||
    date(props.dateOfBirth) ||
    cardType(props.cardType) ||
    address(props.homeAddress) ||
    address(props.mailingAddress) ||
    traitsHeightWeight(props.traitsHeightWeight) ||
    physicalTraits(props.physicalTraits) ||
    organDonation(props.organDonation) ||
    socialSecurity(props.socialSecurity) ||
    veteransService(props.veteransService) ||
    namesHistory(props.namesHistory) ||
    medicalHistory(props.medicalHistory) ||
    licenseIssues(props.licenseIssues) ||
    licenseAndIdHistory(props.licenseAndIdHistory) ||
    value(props.citizenStatus) ||
    value(props.ballotByMail) ||
    value(props.eligibilityRequirements) ||
    politicalPartyChoose(props.politicalPartyChoose) ||
    value(props.ballotLanguage) ||
    value(props.optOut) ||
    contactMethods(props.contactMethods) || 
    realID(props.realID);
};

export {
  value,
  legalName,
  cardType,
  address,
  date,
  traitsHeightWeight,
  physicalTraits,
  organDonation,
  socialSecurity,
  veteransService,
  namesHistory,
  hasMedicalCondition,
  medicalHistory,
  licenseIssues,
  licenseAndIdHistory,
  politicalPartyChoose,
  contactMethods,
  hasPreviousNames,
  homeAddressSameAsMailing,
  application,
  realID
};
