'use strict';

const value = (value) => {
  return !!(value && value.trim());
};

const legalName = (legalName) => {
  return value(legalName.lastName);
};

const date = (date) => {
  return (
    value(date.month) && value(date.day) && value(date.year)
  );
};

const address = (address) => {
  return (
    value(address.street_1) || value(address.street_2) || value(address.city) || value(address.zip)
  );
};

const height = (height) => {
  return value(height.feet);
}

export { value, legalName, address, date, height };
