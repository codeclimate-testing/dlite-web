'use strict';

import alicePath from './alice-path';

const onBackGenerator = (props) => {
  return (event) => {
    if (props.onSubmit) { props.onSubmit(event); }
    props.history.goBack();
  };
};

export default onBackGenerator;
