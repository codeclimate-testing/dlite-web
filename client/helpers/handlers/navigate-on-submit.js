'use strict';

import {
  iddlPath,
  cdlPath
} from '../alice-path';

const onSubmitGenerator = (address, props) => {
  return (event) => {
    props.onSubmit(event);
    if(props.location.pathname.includes('id-and-license')) {
      return props.history.push(
        iddlPath(address)
      );
    }
    if(props.location.pathname.includes('cdl')) {
      return props.history.push(
        cdlPath(address)
      );
    }
  };
};

export default onSubmitGenerator;
