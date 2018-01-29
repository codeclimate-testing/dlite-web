import { hasValue } from './validations';

export const hasAnySSN = (props) => {
  return (hasValue(props.part1) || hasValue(props.part2) || hasValue(props.part3));
};

export const hasNone = (props) => {
  if (!hasAnySSN(props)){
    return true;
  } else {
    return false;
  }
};