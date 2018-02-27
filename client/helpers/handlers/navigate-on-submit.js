'use strict';

import { iddlPath } from '../alice-path';

const onSubmitGenerator = (address, props) => {  
  return (event) => {
    props.onSubmit(event);
    return props.history.push(
      iddlPath(address)
    );
  };
};

export default onSubmitGenerator;
