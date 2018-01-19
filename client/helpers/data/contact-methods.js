import { hasValue } from './validations';

export const hasPhone = (props) => {
  return (hasValue(props.phoneNumber1) && hasValue(props.phoneNumber2) && hasValue(props.phoneNumber3));
};

export const hasAnyPhone = (props) => {
  return (hasValue(props.phoneNumber1) || hasValue(props.phoneNumber2) || hasValue(props.phoneNumber3));
};

export const hasNeither = (props) => {
  if (!hasValue(props.emailAddress) && !hasAnyPhone(props)){
    return true;
  } else {
    return false;
  }
};