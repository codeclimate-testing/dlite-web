'use strict';

const value = (props) => {
  return !!(props && props.trim());
};

const legalName = (props) => {
  return props && value(props.lastName);
};

const date = (props) => {
  return props && (
    value(props.month) && value(props.day) && value(props.year)
  );
};

const address = (props) => {
  return props && (
    value(props.street_1) || value(address.street_2) || value(props.city) || value(props.zip)
  );
};

const height = (props) => {
  return props && value(props.feet);
}

const organDonation = (props) => {
  return props && (
    value(props.donate) && value(props.contribute)
  );
}

const socialSecurity = (props) => {
  return props && (
    value(props.part1) && value(props.part2) && value(props.part3)
  );
}

const suspendedLicenseInfo = (props) => {
  return props && (
    (value(props.month) && value(props.day) && value(props.year)) ||
    value(props.reason) ||
    value(props.isSuspended)
  );
}

const existingDLIDInfo = (props) => {
  return props && (
    (value(props.month) && value(props.day) && value(props.year)) ||
    value(props.DLIDNumber) ||
    value(props.issuedBy) ||
    value(props.hasExisting)
  );
}

const previousNamesInfo = (props) => {
  return props && (
    value(props.names) || value(props.hasPreviousNames)
  );
}

const politicalContact = (props) => {
  return props && (
    (value(props.emailAddress) || value(props.phoneNumber)) && value(props.shouldContact)
  );
}

const politicalPartyChoose = (props) => {
    return props && (
    value(props.politicalPartyChoose) && value(props.isSelected)
  );
}

const application = (props) => {
  return legalName(props.legalName) ||
    date(props.dateOfBirth) ||
    address(props.homeAddress) ||
    address(props.mailingAddress) ||
    value(props.sex) ||
    value(props.eyeColor) ||
    value(props.hairColor) ||
    height(props.height) ||
    value(props.weight) ||
    organDonation(props.organDonation) ||
    socialSecurity(props.socialSecurity) ||
    suspendedLicenseInfo(props.suspendedLicenseInfo) ||
    previousNamesInfo(props.previousNamesInfo) ||
    existingDLIDInfo(props.existingDLIDInfo) ||
    value(props.citizenStatus) ||
    value(props.ballotByMail) ||
    value(props.eligibilityRequirements) ||
    politicalPartyChoose(props.politicalPartyChoose) ||
    value(props.ballotLanguage) ||
    value(props.optOut) ||
    politicalContact(props.politicalContact);
};

export {
  value,
  legalName,
  address,
  date,
  height,
  organDonation,
  socialSecurity,
  suspendedLicenseInfo,
  previousNamesInfo,
  existingDLIDInfo,
  politicalPartyChoose,
  politicalContact,
  application
};
