import { hasValue } from './validations';

export const hasAnySSN = (props) => {
  return (hasValue(props.part1) || hasValue(props.part2) || hasValue(props.part3));
};

export const hasNone = (props) => {
  return !hasAnySSN(props);
};

export const hasSocialSecurityYes = (props) => {
  return props.socialSecurity.hasSocialSecurity === 'Yes';
};

export const hasSocialSecurityNo = (props) => {
  return props.socialSecurity.hasSocialSecurity === 'No';
};

export const getSocialSecurityString = (props) => {
  let socialSecurity =  'xxx' + '-' + 'xx' + '-' + props.socialSecurity.part3;
  return hasSocialSecurityYes(props) ? socialSecurity : 'None';
};
