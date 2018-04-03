'use strict';

import { nextPath } from '../navigation/page';

const isSubmitable = (props, validator) => {
  return props.onSubmitShowErrors && validator && validator.isValid();
};

const onSubmitGenerator = (currentPageKey, props, validator) => {
  const goToNextPage = (event) => {
    props.onSubmit(event);
    console.log(currentPageKey);
    console.log(nextPath(currentPageKey, props));
    console.log(props)
    props.history.push(
      nextPath(currentPageKey, props)
    );
  };

  let generator;
  if (isSubmitable(props, validator)) {
    generator = goToNextPage;
  } else {
    generator = props.onSubmitShowErrors;
  }
  return generator;
};

export default onSubmitGenerator;


