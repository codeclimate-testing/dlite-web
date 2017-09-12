'use strict';

import alicePath from './alice-path';

const onSubmitGenerator = (address, props) => {
  return (event) => {
    props.onSubmit(event);
    props.history.push(
      alicePath(address)
    );
  };
};

export default onSubmitGenerator;
