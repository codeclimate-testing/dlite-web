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

const organ = (props) => {
  return props && (
    value(props.donate) || value(props.contribute)
  );
};

const socialSecurity = (props) => {
  return props && (
    value(props.part1) && value(props.part2) && value(props.part3)
  );
}

const contactDetails = (props) => {
  return props && (
    value(props.emailAddress) || value(props.phoneNumber)
  );
}

const suspendedLicense = (props) => {
  return props && (
    (value(props.month) && value(props.day) && value(props.year)) ||
    value(props.reason)
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
    organ(props.organ) ||
    socialSecurity(props.socialSecurity) ||
    suspendedLicense(props.suspendedLicense) ||
    value(props.citizenStatus) ||
    value(props.contactChoice) ||
    value(props.ballotByMail) ||
    value(props.eligibilityRequirements) ||
    value(props.politicalPartyChoose) ||
    value(props.politicalPartyPreference) ||
    contactDetails(props.contactDetails) ||
    value(props.ballotLanguage) ||
    value(props.optOut);
};

export {
  value,
  legalName,
  address,
  date,
  height,
  organ,
  socialSecurity,
  contactDetails,
  suspendedLicense,
  application
};
