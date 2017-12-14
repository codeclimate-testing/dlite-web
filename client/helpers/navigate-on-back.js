'use strict';

import alicePath from './alice-path';

const onBackGenerator = (props) => {
  return (event) => {
    props.onSubmit(event);
    props.history.goBack();
  };
};

export default onBackGenerator;
