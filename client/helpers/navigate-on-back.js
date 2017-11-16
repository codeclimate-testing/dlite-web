'use strict';

import alicePath from './alice-path';

const onBackGenerator = (address, props) => {
  return (event) => {
    props.history.push(
      alicePath(address)
    );
  };
};

export default onBackGenerator;
