'use strict';
import { editMode }             from '../data/pathnames';
import { requireLogIn }         from '../data/cookies';

const normalFlowOrValid = (props, validator) => {
  if (editMode(props)) {
    return (props.onSubmitShowErrors && validator && validator.isValid());
  } else {
    return true;
  }
};

const onBackGenerator = (props, validator) => {

  const goBack = (event) => {
    if (props.onSubmit) { props.onSubmit(event); }
    props.history.goBack();
  };

  if (requireLogIn(props)) {
    return props.history.push(`/apply/${props.appName}/sign-in`);
  }
  else if (normalFlowOrValid(props, validator)) {
    return goBack;
  }
  else {
    return props.onSubmitShowErrors;
  }

};

export default onBackGenerator;
