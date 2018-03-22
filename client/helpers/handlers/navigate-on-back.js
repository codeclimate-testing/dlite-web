'use strict';
import { editMode }             from '../data/pathnames';
import { requireLogIn }         from '../data/cookies';
import { getAppType }           from '../../helpers/data/pathnames';

const normalFlowOrValid = (props, validator) => {
  if (editMode(props)) {
    return (props.onSubmitShowErrors && validator && validator.isValid());
  } else {
    return true;
  }
};

const onBackGenerator = (props, validator, env=APP_ENV, cookie=document.cookie) => {

  const goBack = (event) => {
    if (props.onSubmit) { props.onSubmit(event); }
    props.history.goBack();
  };

  if (requireLogIn(props, env, cookie)) {
    let appName = getAppType(props);
    return props.history.push(`/apply/${appName}/sign-in`);
  }

  else if (normalFlowOrValid(props, validator)) {
    return goBack;
  }
  else {
    return props.onSubmitShowErrors;
  }

};

export default onBackGenerator;
